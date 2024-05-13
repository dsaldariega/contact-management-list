import React from "react";

const ContactTable: React.FC = ({
  contacts,
  onDelete,
  handleEdit,
  handleView,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact: any) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.contact_number}</td>
              <td>{contact.email}</td>
              <td>
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
                  className="btn btn-primary ms-1"
                  onClick={() => {
                    handleEdit(contact.id);
                  }}
                >
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
