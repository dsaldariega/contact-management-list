import React from "react";
import { ContactModalForm } from "./ContactModalForm";

const ContactCard = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Email: {contact.email}</p>
        <p className="card-text">Phone: {contact.phone}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>
          Delete
        </button>
        <button
        type="button"
          className="btn btn-primary ms-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          // id="editOnCard"
          onClick={(e) => onEdit(
            // contact.id, 
            e)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
