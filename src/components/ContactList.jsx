import React from "react";
import ContactTable from "./ContactTable";
import ContactCard from "./ContactCard";
import '../styles/bootstrapstyles.css'

const ContactList = ({ contacts, onDelete, onEdit, isTableView }) => {
  return (
    <div className="container-fluid">
      {isTableView ? (
        <div className="row">
          <div className="col-sm-12" style={{ border: "1px" }}>
            <ContactTable
              contacts={contacts}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </div>
        </div>
      ) : (
        <div className="row">
          {contacts.map((contact) => (
            <div className="col-sm-4" key={contact.id}>
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
