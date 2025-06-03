import React, { useState } from "react";
import "./contact.scss";
//import axiosRequest from "../../lib/axiosfile"; // If you want to send the form data to your backend

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     // await axiosRequest.post("/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("There was an error. Please try again.");
    }
  };

  return (
    <div className="contact-us">
      <div className="container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Fill out the form below or contact us directly at the provided details.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>

        {status && <p className="status-message">{status}</p>}

        <div className="contact-details">
          <h2>Other Ways to Reach Us</h2>
          <p>Email: vijaypratap1747@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 1234 Some St, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
