import React, { useState } from "react";
import ContactTable from "./ContactTable";
import ContactCard from "./ContactCard";

const ContactList = ({
  contacts,
  onDelete,
  onEdit,
  handleToggleView,
  isTableView,
}) => {
  // const [isTableView, setIsTableView] = useState(true);

  // const handleToggleView = () => {
  //   setIsTableView((prevIsTableView) => !prevIsTableView);
  // };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          {isTableView ? (
            <ContactTable
              contacts={contacts}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ) : (
            contacts.map((contact) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={contact.id}
              >
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
    </div>
  );
};

export default ContactList;
