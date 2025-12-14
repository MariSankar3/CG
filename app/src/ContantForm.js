import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_10swurq",          // Service ID
        "template_2enjeyg",          // Template ID
        {
          name: formData.name,
          number: formData.number,
          description: formData.description
        },
        "FoCgY3b7Wo5BXFi2p"           // Public Key
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({ name: "", number: "", description: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send email. Check console.");
          setLoading(false);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} style={{ maxWidth: "400px", margin: "auto" }}>
      <h3>Contact Form</h3>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="tel"
        name="number"
        placeholder="Phone Number"
        value={formData.number}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
