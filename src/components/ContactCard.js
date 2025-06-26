import React from "react";
import user from "../images/user.png"; // use any placeholder image
import { Link } from "react-router-dom";
const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", float: "right" }}
        onClick={() => clickHandler(id)}
      ></i>
      <Link to="/edit" state={{ contact }}>
        <i
          className="edit alternate outline icon"
          style={{
            color: "green",
            marginTop: "7px",
            marginRight: "10px",
            float: "right",
          }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
