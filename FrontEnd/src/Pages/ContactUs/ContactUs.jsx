
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import emailjs from 'emailjs-com'; // Import the Email module from emailjs-com library
import "./ContactUs.css"

function ContactUs() {
  // Define state variables for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handler function to update state when input fields change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  }

  // Handler function for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send email using Email.send method from emailjs-com library
    emailjs.sendForm('service_94iphsx', 'template_7sfskt8', event.target, 'ncFpfY7F40UN3RChI')
      .then((result) => {
        alert("Email sent successfully!");}, (error) => {
        console.error('Email send failed:', error);
        alert("Email send failed. Please try again later.");
      })
      .finally(() => {
        // Clear the form after submission attempt
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      });
  }

  return (
    <div>
      <Navbar />
      <div className="contact">
      <div className="contact-body">
        <div className="outer-box">
          <div className="inner-box">
            <header className="contact-header">
              <h1>Contact Us</h1>
              <p>We understand that you may have questions or need assistance, and we're here to help. Please feel free to reach out by filling out the form below.</p>
            </header>
            <main className="signup-body">
              <form onSubmit={handleSubmit}>
                <p>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} placeholder="Enter name" name="user_name" required />
                </p>
                <p>
                  <label htmlFor="email">Your Email</label>
                  <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="Enter email" name="user_email" required />
                </p>
                <p>
                  <label htmlFor="phone">Your Phone Number</label>
                  <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" name="user_phone" required />
                </p>
                <p>
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" value={formData.message} onChange={handleChange} cols="75" rows="7" placeholder="Enter your message here" name="message" required />
                </p>
                <p>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </p>
              </form>
            </main>
          </div>
          <div className="circle c1"></div>
          <div className="circle c2"></div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;


