import React from "react";
import Contact from "./Contact";

const Contacts = ({ contacts, handleEdit }) => {
  return (
    <div className="card">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">Name</div>
          <div className="col-3">Email</div>
          <div className="col-3">Contact</div>
          {contacts.map((contact, index) => {
            return (
              <Contact key={index} contact={contact} handleEdit={handleEdit} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
