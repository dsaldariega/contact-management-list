import React, { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import { useParams, useNavigate } from "react-router-dom";
import { getContactById, saveContact, updateContact } from "../api/contactApi";

function ContactFormContainer() {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch contact details if editing an existing contact
      getContactById(id)
        .then((data) => setContact(data))
        .catch((error) => console.error("Error fetching contact: ", error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update existing contact if ID exists
        await updateContact(id, contact);
      } else {
        // Save new contact if no ID exists
        await saveContact(contact);
      }
      navigate("/"); // Navigate to contact list page after successful submission
    } catch (error) {
      console.error("Error saving contact: ", error);
    }
  };

  return (
    <ContactForm
      contact={contact}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default ContactFormContainer;
