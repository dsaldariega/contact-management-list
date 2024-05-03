import React, { useEffect, useState } from "react";
import { ContactModalForm } from "../components/ContactModalForm";
import { getContactById } from "../api/contactApi";

function ContactFormContainer({
  contact,
  setContact,
  handleSubmit,
  handleChange,
  handleEdit,
}) {
  const [modalTitle, setModalTitle] = useState("");

  const handleAddContact = (param) => {
    setContact({ name: "", email: "", contact_number: "" }); // Clear form fields
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleAddContact}
        style={{ margin: "4px" }}
      >
        Add New Contact
      </button>
      <ContactModalForm
        contact={contact}
        setContact={setContact}
        handleSubmit={handleSubmit}
        modalTitle={modalTitle}
        handleEdit={handleEdit}
        setModalTitle={setModalTitle}
      />
    </div>
  );
}

export default ContactFormContainer;
