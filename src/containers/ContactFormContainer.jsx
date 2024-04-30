import React from "react";
import { ContactModalForm } from "../components/ContactModalForm";

function ContactFormContainer({
  modalTitle,
  setModalTitle,
  contactId,
  contact,
  setContact,
  handleSubmit,
  handleChange,
  handleEdit,
  handleAddContact
}) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleAddContact}
        style={{margin: '4px'}}
      >
        Add New Contact
      </button>
      <ContactModalForm
        contact={contact}
        setContact={setContact}
        handleChange={handleChange}
        onSubmit={handleSubmit}
        modalTitle={modalTitle}
        contactId={contactId}
        handleEdit={handleEdit}
        setModalTitle={setModalTitle}
      />
    </div>
  );
}

export default ContactFormContainer;
