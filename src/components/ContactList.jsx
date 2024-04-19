import React, { useState } from "react";
import ContactTable from "./ContactTable";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  const [isTableView, setIsTableView] = useState(true);

  const handleToggleView = () => {
    setIsTableView((prevIsTableView) => !prevIsTableView);
  };

  return (
    <div className="container">
      <div className="row align-items-center mb-3">
        {/* {isTableView ? (
            <i className="bi bi-view-list" onClick={handleToggleView}></i>
          ) : (
            <i className="bi bi-table" onClick={handleToggleView}></i>
          )} */}
        <button
          className="btn btn-outline-secondary"
          onClick={handleToggleView}
          aria-label={
            isTableView ? "Switch to Card View" : "Switch to Table View"
          }
        >
          {isTableView ? (
            <i className="bi bi-view-list" />
          ) : (
            <i className="bi bi-table" />
          )}
        </button>
      </div>
      <div className="row">
        {isTableView ? (
          <ContactTable
            contacts={contacts}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ) : (
          contacts.map((contact) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={contact.id}>
              <ContactCard
                contact={contact}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactList;
