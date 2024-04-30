import React, { useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import {
  deleteContact,
  getAllContacts,
  getContactById,
  saveContact,
  updateContact,
} from "../api/contactApi";
import ContactFormContainer from "./ContactFormContainer";
import Swal from "sweetalert2";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactListContainer = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    contact_number: "",
  });
  const [contactId, setContactId] = useState("");
  const [isTableView, setIsTableView] = useState(true);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    // Fetch contacts from the API when the component mounts
    getAllContacts()
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts: ", error));
  }, []);

  useEffect(() => {
    if (contactId) {
      // Fetch contact details if editing an existing contact
      getContactById(contactId)
        .then((data) => setContact(data))
        .catch((error) => console.error("Error fetching contact: ", error));
    }
  }, [contactId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleAddContact = () => {
    setContact({ name: "", email: "", contact_number: "" }); // Clear form fields
    setContactId(""); // Reset contactId to indicate adding a new contact
    setModalTitle("Add New Contact"); // Optionally, set the modal title to indicate adding a new contact
  };

  const handleEdit = async (e, id) => {
    try {
      setModalTitle("Edit Contact");
      setContactId(id);

      // Fetch the updated contact data
      const updatedContact = await getContactById(id);
      setContact(updatedContact);
    } catch (error) {
      console.error("Error editing contact: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (contactId) {
        // Update existing contact if ID exists
        await updateContact(contactId, contact);
        setContacts((prevContacts) =>
          prevContacts.map((prevContact) =>
            prevContact.id === contactId ? contact : prevContact
          )
        );
        Swal.fire("User has been updated!");
      } else {
        // Save new contact if no ID exists
        const newContact = await saveContact(contact);
        setContacts((prevContacts) => [...prevContacts, newContact]);
        Swal.fire("User has been added!");
      }
    } catch (error) {
      console.error("Error saving contact: ", error);
    }
  };

  const handleDelete = async (contactId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        await deleteContact(contactId);
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== contactId)
        );
      }
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  const handleToggleView = () => {
    setIsTableView((prevIsTableView) => !prevIsTableView);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Customer Information</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10">
          <span>
            Your list of customer appear here. To add a new contact, click on
            the Add New Customer button.
          </span>
        </div>
        <div className="col-sm-2">
          <ContactFormContainer
            modalTitle={modalTitle}
            setModalTitle={setModalTitle}
            contactId={contactId}
            contacts={contacts}
            setContacts={setContacts}
            handleSubmit={handleSubmit}
            contact={contact}
            setContact={setContact}
            handleChange={handleChange}
            handleEdit={handleEdit}
            handleAddContact={handleAddContact}
          />
        </div>
      </div>
      {isTableView ? (
        <div className="row">
          <div className="col-sm-10">{""}</div>
          <div className="col-sm-2">
            <div className="btn-group" style={{margin: "4px"}}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleToggleView}
              >
                <i className="bi bi-view-list"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleToggleView}
              >
                <i className="bi bi-table"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-sm-10">{""}</div>
          <div className="col-sm-2">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleToggleView}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-view-list"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
                </svg>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleToggleView}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-table"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <ContactList
        contacts={contacts}
        onDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggleView={handleToggleView}
        isTableView={isTableView}
      />
    </div>
  );
};

export default ContactListContainer;
