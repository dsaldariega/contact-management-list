import React from "react";

const ContactCard = ({ contact, onDelete, handleEdit }) => {
  return (
    <div className="card" style={{ margin: "2px" }}>
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Email: {contact.email}</p>
        <p className="card-text">Contact Number: {contact.contact_number}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>
          <i className="bi bi-trash3"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={() => {
            handleEdit(contact.id);
          }}
        >
          <i className="bi bi-pencil"></i>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
