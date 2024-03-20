import React from "react";
import Contact from "./Contact";

const TableContacts = ({ contacts, handleEdit, handleDelete }) => {
  return (
    <div>
      <Contact
        contacts={contacts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TableContacts;
