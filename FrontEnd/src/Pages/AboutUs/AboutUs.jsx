import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import "./AboutUs.css"

function AboutUs() {
    return (
        <><div><Navbar /><div className="content">
            <div className="about-us">
                <h1 className="about-heading">About Us</h1>

                <div className="card">
                    <h2>Our Mission</h2>
                    <p>At Fake Image Detection, our mission is to combat the spread of misinformation by providing advanced solutions for detecting fake images. We strive to create a safer online environment by empowering individuals and organizations to make informed decisions based on authentic information.</p>
                </div>

                <div className="card">
                    <h2>How We Work</h2>
                    <p>We employ sophisticated algorithms that analyze various aspects of images to detect signs of manipulation, alterations, or misinformation. Our image detection process involves:</p>
                    <ul>
                        <li><strong>Image Analysis:</strong> Comprehensive analysis of pixels, metadata, and patterns within an image.</li>
                        <li><strong>Pattern Recognition:</strong> Identifying patterns commonly associated with manipulated or fake images.</li>
                        <li><strong>Machine Learning:</strong> Utilizing machine learning models to continuously improve our detection capabilities.</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>Team</h2>
                    <p>Our diverse team consists of skilled professionals in the fields of computer vision, artificial intelligence, and cybersecurity. We are passionate about utilizing our expertise to contribute to the global fight against digital deception.</p>
                </div>

                <div className="card">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feedback, or collaboration inquiries, feel free to <a href="contact.html">contact us</a>. We value transparency and open communication.</p>
                </div>
            </div>
        </div></div>
        <Footer /></>
    );
}

export default AboutUs;
