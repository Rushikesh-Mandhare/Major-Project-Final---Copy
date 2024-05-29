import React from 'react'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import "./Working.css"

function Working() {
  return (
    <>
    <Navbar />
    <div className="content">
    <div className="working">
        <div className="working-info">
        <h1 className="working-heading">How it Works</h1>

        <div className="roadmap">
            <h2>Roadmap to Detection</h2>
            <p>Our approach to detecting fake images involves a comprehensive roadmap using a Convolutional Neural Network (CNN) model:</p>
            <div className="roadmap-steps">
                <div className="roadmap-step">
                    <span className="step-number">1</span>
                    <h3>Data Collection</h3>
                    <p>Gather a diverse dataset of authentic and manipulated images for training. Include various forms of manipulation to enhance model robustness.</p>
                </div>
                <div className="roadmap-step">
                    <span className="step-number">2</span>
                    <h3>Data Preprocessing</h3>
                    <p>Clean and preprocess the images to enhance features, reduce noise, and standardize the data. This step ensures optimal input for the CNN model.</p>
                </div>
                <div className="roadmap-step">
                    <span className="step-number">3</span>
                    <h3>Model Training</h3>
                    <p>Train a Convolutional Neural Network using the preprocessed dataset. The CNN learns to identify patterns and features indicative of image manipulation.</p>
                </div>
                <div className="roadmap-step">
                    <span className="step-number">4</span>
                    <h3>Validation</h3>
                    <p>Validate the model's performance on a separate set of images not used during training. Fine-tune the model to ensure accurate and reliable detection.</p>
                </div>
                <div className="roadmap-step">
                    <span className="step-number">5</span>
                    <h3>Deployment</h3>
                    <p>Deploy the trained CNN model in the fake image detection system for real-time analysis, providing users with accurate results and insights.</p>
                </div>
            </div>
        </div>

        <div className="cnn-model">
            <h2>Convolutional Neural Network (CNN)</h2>
            <p>A Convolutional Neural Network (CNN) is a class of deep neural networks designed for image processing and recognition. It is particularly effective in capturing spatial hierarchies and patterns within images.</p>
            <p>The key components of a CNN include:</p>

            <div className="cnn-components">
                <div className="cnn-component">
                    <h3>Convolutional Layers</h3>
                    <p>Convolutional layers apply filters or kernels to input images, extracting local features and patterns. These filters slide over the input image to detect edges, textures, and more complex structures.</p>
                </div>
                <div className="cnn-component">
                    <h3>Pooling Layers</h3>
                    <p>Pooling layers reduce the spatial dimensions of the input volume. Max pooling, for example, retains the most important information from each local region, helping to down-sample the feature maps.</p>
                </div>
                <div className="cnn-component">
                    <h3>Fully Connected Layers</h3>
                    <p>Fully connected layers process the high-level features captured by the convolutional and pooling layers. These layers connect every neuron to every neuron in the previous and subsequent layers, enabling the model to make predictions based on the learned features.</p>
                </div>
            </div>

            <p>CNNs excel at feature extraction, allowing them to learn hierarchical representations of image content. This capability makes them highly effective for tasks such as image classification, object detection, and, in our case, fake image detection.</p>
        </div>
        </div>
        <div className="youtube-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QzY57FaENXg?si=hlHjXFODC7Nlpa5X" title="Video explaining CNN" frameborder="0" allowfullscreen></iframe>
        </div>

    </div>
</div>
<Footer />
</>
  )
}

export default Working

