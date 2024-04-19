import React from "react";

const ContactTable = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              {/* <td>{contact.id}</td> */}
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(contact.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary ms-1"
                  onClick={() => onEdit(contact.id)}
                >
                  Edit
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
