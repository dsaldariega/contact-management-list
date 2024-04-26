import React, { useState, useEffect } from "react";
import { getContactById, saveContact, updateContact } from "../api/contactApi";
import { ContactModalForm } from "../components/ContactModalForm";
import Swal from "sweetalert2";

function ContactFormContainer({ modalTitle, setModalTitle, contactId, contacts, setContacts }) {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

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

  const handleModalTitle = (e) => {
    const title = e.target.id;
    setModalTitle(title);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (contactId) {
        // Update existing contact if ID exists
        await updateContact(contactId, contact);
        
        Swal.fire("User has been updated!");
      } else {
        // Save new contact if no ID exists
        await saveContact(contact);
        Swal.fire("User has been added!");
      }
    } catch (error) {
      console.error("Error saving contact: ", error);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={(e) => handleModalTitle(e)}
        id="addNewContact"
      >
        Add New Contact
      </button>
      <ContactModalForm
        contact={contact}
        setContact={setContact}
        onChange={handleChange}
        onSubmit={handleSubmit}
        modalTitle={modalTitle}
        contactId={contactId}
      />
    </div>
  );
}

export default ContactFormContainer;
