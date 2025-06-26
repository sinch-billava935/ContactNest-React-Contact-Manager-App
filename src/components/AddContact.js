import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddContact.css";

const AddContact = ({ addContactHandler }) => {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("All fields are mandatory!");
      return;
    }

    addContactHandler(contact);
    setContact({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="add-contact-container">
      <h2 className="form-title">Add Contact</h2>
      <form className="add-contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={contact.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <button className="submit-btn">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
