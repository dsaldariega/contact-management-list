import React from "react";

interface ContactCardProps {
  contact: any;
  onDelete: any;
  handleEdit: any;
  handleView: any;
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  onDelete,
  handleEdit,
  handleView,
}) => {
  return (
    <div
      className="card"
      style={{ margin: "2px" }}
      onClick={() => handleView(contact.id)}
    >
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Email: {contact.email}</p>
        <p className="card-text">Contact Number: {contact.contact_number}</p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-secondary"
          onClick={() => handleView(contact.id)}
        >
          <i className="bi bi-eye-fill"></i>
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => onDelete(contact.id)}
        >
          <i className="bi bi-trash3"></i>
        </button>
        <button
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
