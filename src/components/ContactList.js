import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

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
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right" style={{ float: "right" }}>
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input" style={{ width: "100%" }}>
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
      <div className="ui celled list" style={{ marginTop: "20px" }}>
        {renderContactList.length > 0 ? (
          renderContactList
        ) : (
          <p>No contacts found.</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
