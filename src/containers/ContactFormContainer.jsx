import React, { useState } from "react";
import { ContactModalForm } from "../components/ContactModalForm";

function ContactFormContainer({
  handleSubmit,
  handleEdit,
  isModalOpen,
  setIsModalOpen,
  contact,
  setContact,
}) {
  const [modalTitle, setModalTitle] = useState("");

  const handleAddContact = () => {
    // Clear form fields
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddContact}
        style={{ margin: "4px" }}
      >
        Add New Contact
      </button>
      <ContactModalForm
        handleSubmit={handleSubmit}
        modalTitle={modalTitle}
        handleEdit={handleEdit}
        setModalTitle={setModalTitle}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        contact={contact}
        setContact={setContact}
      />
    </div>
  );
}

export default ContactFormContainer;
