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
import { useNavigate } from "react-router-dom";

const ContactListContainer = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isTableView, setIsTableView] = useState<boolean>(true);
  const [contactId, setContactId] = useState<string>("");
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    contact_number: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleEdit = async (id) => {
    setIsModalOpen(true);
    try {
      // setModalTitle("Edit Contact");
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
    if (!contactId) {
      // Save new contact if no ID exists
      const newContact = await saveContact(contact);
      setIsModalOpen(false);
      setContacts((prevContacts) => [...prevContacts, newContact]);
      Swal.fire("User has been added!");
    }
    if (contactId) {
      // Update existing contact if ID exists
      await updateContact(contactId, contact);
      setContacts((prevContacts) =>
        prevContacts.map((prevContact) =>
          prevContact.id === contactId ? contact : prevContact
        )
      );
      Swal.fire("User has been updated!");
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
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== contactId)
        );
        await deleteContact(contactId);
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  const handleToggleView = () => {
    setIsTableView((prevIsTableView) => !prevIsTableView);
  };

  const handleView = (id) => {
    navigate(`/contact/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>Contacts Information</h2>
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
            setContactId={setContactId}
            handleSubmit={handleSubmit}
            handleEdit={handleEdit}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            contact={contact}
            setContact={setContact}
          />
        </div>
      </div>
      {isTableView ? (
        <div className="row">
          <div className="col-sm-10">{""}</div>
          <div className="col-sm-2">
            <div className="btn-group" style={{ margin: "4px" }}>
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
            <div className="btn-group" style={{ margin: "4px" }}>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleToggleView}
              >
                <i className="bi bi-view-list" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleToggleView}
              >
                <i className="bi bi-table" />
              </button>
            </div>
          </div>
        </div>
      )}
      <ContactList
        handleView={handleView}
        contacts={contacts}
        onDelete={handleDelete}
        handleEdit={handleEdit}
        isTableView={isTableView}
      />
    </div>
  );
};

export default ContactListContainer;
