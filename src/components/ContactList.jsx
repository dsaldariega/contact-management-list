import React from "react";
import ContactTable from "./ContactTable";
import ContactCard from "./ContactCard";

const ContactList = ({
  contacts,
  onDelete,
  handleEdit,
  isTableView,
  setContact,
}) => {
  return (
    <div className="container-fluid" style={{ margin: "4px" }}>
      {isTableView ? (
        <div className="row">
          <div className="col-sm-12" style={{ border: "1px" }}>
            <ContactTable
              contacts={contacts}
              onDelete={onDelete}
              handleEdit={handleEdit}
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
                handleEdit={handleEdit}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
