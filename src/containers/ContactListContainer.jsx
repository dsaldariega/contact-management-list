import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import { deleteContact, getAllContacts } from "../api/contactApi";

const ContactListContainer = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch contacts from the API when the component mounts
    getAllContacts()
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts: ", error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (contactId) => {
    try {
      await deleteContact(contactId);
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  // const handleView = (e, newView) => {
  //   if (newView !== null) {
  //     setIsContactView(newView);
  //   }
  // };
  return (
    <div className="container-fluid">
      <h2>Contact List</h2>
      <ContactList
        contacts={contacts}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <Link to="/add">
        <button className="btn btn-primary ms-1">Add Contact</button>
      </Link>
    </div>
  );
};

export default ContactListContainer;
