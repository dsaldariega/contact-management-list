import React, { useState } from "react";
import { ContactModalForm } from "../components/ContactModalForm";
interface ContactFormContainerProps {
  handleSubmit: any;
  handleEdit: any;
  isModalOpen: any;
  setIsModalOpen: any;
  contact: any;
  setContact: any;
  setContactId: any;
}
const ContactFormContainer: React.FC<ContactFormContainerProps> = ({
  handleSubmit,
  handleEdit,
  isModalOpen,
  setIsModalOpen,
  contact,
  setContact,
  setContactId,
}) => {
  const [modalTitle, setModalTitle] = useState<string>("");

  const handleAddContact = () => {
    setIsModalOpen(true);
    // Clear form fields
    setContactId("");
    setContact(
      (contact = {
        name: "",
        email: "",
        contact_number: "",
      })
    );
  };
  console.log("%c Line:24 🍌 contact", "color:#ea7e5c", contact);
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
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        contact={contact}
        setContact={setContact}
      />
    </div>
  );
};

export default ContactFormContainer;
