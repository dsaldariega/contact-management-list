import React from "react";
import Contact from "./Contact";

const Contacts = ({ contacts }) => {
  return (
    <div className="container">
      <div className="row">
        {contacts.map((contact, index) => {
          return <Contact key={index} contact={contact} />;
        })}
      </div>
    </div>
  );
};

export default Contacts;
