import React from "react";

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
          className="btn btn-primary ms-2"
          onClick={() => onEdit(contact.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
