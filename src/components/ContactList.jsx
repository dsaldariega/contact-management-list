import React from "react";
import ContactTable from "./ContactTable";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, isTableView, openModalDialog }) => {
  return (
    <div className="container mx-auto px-4 py-2">
      {!isTableView ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <div key={contact.id}>
              <ContactCard
                contact={contact}
                openModalDialog={openModalDialog}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <ContactTable contacts={contacts} openModalDialog={openModalDialog} />
        </div>
      )}
    </div>
  );
};

export default ContactList;
