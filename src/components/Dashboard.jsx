import React from "react";
import Contacts from "./Contacts";
import { Link } from "react-router-dom";

export const Dashboard = ({ contacts, handleEdit }) => {
  return (
    <div className="container">
      <div>
        Your list of contacts appear here. To add new contact, click on the Add
        New Contact button.
      </div>
      <div>
        <Link to="/add-contact">
          <button
            type="button"
            className="btn btn-primary"
            //   onClick={handleAddContact}
          >
            Add New Contact
          </button>
        </Link>
      </div>
      <Contacts contacts={contacts} handleEdit={handleEdit} />
    </div>
  );
};
