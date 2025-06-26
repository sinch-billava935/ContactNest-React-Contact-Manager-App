import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/EditContact.css";
const EditContact = ({ updateContactHandler }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id, name, email } = location.state.contact;

  const [contact, setContact] = useState({ id, name, email });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("All fields are mandatory!");
      return;
    }

    updateContactHandler(contact);
    navigate("/");
  };

  return (
    <div className="edit-contact-container">
      <h2 className="edit-heading">Edit Contact</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={contact.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <button className="edit-btn">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
