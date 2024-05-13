import React from "react";
import ContactCard from "./ContactCard";
import ContactTable from "./ContactTable";

interface ContactListProps {
  handleView: (id: string) => void;
  contacts: Contact[];
  onDelete: (contactId: string) => Promise<void>;
  handleEdit: (id: string) => Promise<void>;
  isTableView: boolean;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onDelete,
  handleEdit,
  isTableView,
  handleView,
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
              handleView={handleView}
            />
          </div>
        </div>
      ) : (
        <div className="row">
          {contacts.map((contact: any) => (
            <div className="col-sm-4" key={contact.id}>
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={onDelete}
                handleEdit={handleEdit}
                handleView={handleView}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
