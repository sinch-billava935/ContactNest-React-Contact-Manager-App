import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import "../styles/ContactCard.css";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="contact-card">
      <div className="contact-info">
        <img className="avatar" src={user} alt="user" />
        <div className="contact-details">
          <div className="contact-name">{name}</div>
          <div className="contact-email">{email}</div>
        </div>
      </div>
      <div className="contact-actions">
        <Link to="/edit" state={{ contact }}>
          <i className="edit alternate outline icon action-icon edit-icon" />
        </Link>
        <i
          className="trash alternate outline icon action-icon delete-icon"
          onClick={() => clickHandler(id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
