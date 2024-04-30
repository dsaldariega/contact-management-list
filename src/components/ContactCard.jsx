import React from "react";

const ContactCard = ({ contact, onDelete, handleEdit }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Email: {contact.email}</p>
        <p className="card-text">Contact Number: {contact.contact_number}</p>
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
          onClick={(e) => {handleEdit(e, contact.id)
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
