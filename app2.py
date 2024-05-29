from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
import cv2 as cv
from pymongo import MongoClient
import gridfs
from bson import ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the saved model
model = load_model("AI-V-Real-V2.h5")
img_size = 48

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI
db = client['image_database']
fs = gridfs.GridFS(db)

def prepare_image(file_data):
    try:
        # Decode the image
        file_bytes = np.frombuffer(file_data, np.uint8)
        img_arr = cv.imdecode(file_bytes, cv.IMREAD_COLOR)
        
        # Downscale the image quality
        new_width = 48  # Target width
        new_height = 48  # Target height
        dsize = (new_width, new_height)
        
        # Resize the image
        downscaled_img = cv.resize(img_arr, dsize, interpolation=cv.INTER_AREA)
        
        # Optionally, compress the image to reduce quality (simulate lower quality)
        encode_param = [int(cv.IMWRITE_JPEG_QUALITY), 50]  # 50% quality
        result, encimg = cv.imencode('.jpg', downscaled_img, encode_param)
        downscaled_img = cv.imdecode(encimg, cv.IMREAD_COLOR)
        
        # Normalize the image
        new_arr = downscaled_img / 255.0
        
        return np.array([new_arr]).reshape(-1, img_size, img_size, 3)
    except Exception as e:
        return None

@app.route('/api/upload_predict', methods=['POST'])
def upload_predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        file_data = file.read()
        img = prepare_image(file_data)
        if img is not None:
            y = model.predict(img)
            predicted_label = 0 if y[0] <= 0.5 else 1
            result = "The given image is Real." if predicted_label == 0 else "The given image is AI Generated."
            
            # Store the file in MongoDB with the predicted label
            file_id = fs.put(file_data, filename=file.filename, metadata={'predicted_label': predicted_label})
            
            return jsonify({'result': result, 'file_id': str(file_id)})
        else:
            return jsonify({'error': 'Error processing image.'})
    return jsonify({'error': 'No file provided.'})

@app.route('/image/<file_id>')
def get_image(file_id):
    file_data = fs.get(ObjectId(file_id)).read()
    return file_data, 200, {'Content-Type': 'image/jpeg'}

if __name__ == '__main__':
    app.run(debug=True)
