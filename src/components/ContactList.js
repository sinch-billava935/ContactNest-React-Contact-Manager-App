import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import "../styles/ContactList.css";

const ContactList = ({ contacts, getContactId }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(contacts);

  const deleteContactHandler = (id) => {
    getContactId(id);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchTerm, contacts]);

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={deleteContactHandler}
      key={contact.id}
    />
  ));

  return (
    <div className="list-container">
      <h2 className="list-heading">
        People
        <Link to="/add">
          <button className="add-contact-btn">Add Contact</button>
        </Link>
      </h2>
      <div className="search-container">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={searchTerm}
            onChange={handleSearch}
          />
          <i className="search icon" />
        </div>
      </div>
      <div className="each-contact-list">
        {renderContactList.length > 0 ? (
          renderContactList
        ) : (
          <p className="no-contact">No contacts found.</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
