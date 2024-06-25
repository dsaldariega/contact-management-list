import React, { useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import {
  deleteContact,
  getAllContacts,
  getContactById,
  saveContact,
  updateContact,
} from "../api/contactApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Header } from "../layout/Header";
import { ModalDialog } from "../components/ModalDialog";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { TableCellsIcon } from "@heroicons/react/24/outline";
import ToastDialog from "../utils/ToastDialog";

const ContactListContainer = () => {
  const [contacts, setContacts] = useState([]);
  const [isTableView, setIsTableView] = useState(true);
  const [contactId, setContactId] = useState("");
  const [contact, setContact] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const openModalDialog = (action, id) => {
    setIsModalOpen(true);
    setAction(action);
    setContactId(id);
    if (action === "add") {
      setContact({});
    }
  };

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
    setIsModalOpen(false);
    try {
      setContactId(id);
      // Fetch the updated contact data
      const updatedContact = await getContactById(id);
      setContact(updatedContact);
    } catch (error) {
      console.error("Error editing contact: ", error);
    }
  };

  const handleSubmit = async () => {
    if (action === "add" || !contactId) {
      // Save new contact if no ID exists
      const newContact = await saveContact(contact);
      setIsModalOpen(false);
      setContact({});
      setContacts((prevContacts) => [...prevContacts, newContact]);
      setToastOpen(true);
      setToastMessage("User successfully added");
    }

    if (action === "edit") {
      // Update existing contact if ID exists
      await updateContact(contactId, contact);
      setContacts((prevContacts) =>
        prevContacts.map((prevContact) =>
          prevContact.id === contactId ? contact : prevContact
        )
      );
      setIsModalOpen(false);
      setToastOpen(true);
      setToastMessage("User successfully updated");
    }
  };

  const handleDelete = async () => {
    try {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
      await deleteContact(contactId);
      setIsModalOpen(false);
      setToastOpen(true);
      setToastMessage("User successfully deleted");
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  const handleView = (id) => {
    setContactId(id);
    setIsModalOpen(true);
  };

  const handleToggleView = () => {
    setIsTableView((prevIsTableView) => !prevIsTableView);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Header openModalDialog={openModalDialog} setAction={setAction} />
      <div className="flex flex-col items-start">
        <ModalDialog
          action={action}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          contactId={contactId}
          contacts={contacts}
          setContacts={setContacts}
          handleSubmit={handleSubmit}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          contact={contact}
          setContact={setContact}
        />
        <ToastDialog
          toastOpen={toastOpen}
          setToastOpen={setToastOpen}
          toastMessage={toastMessage}
        />
      </div>

      {isTableView ? (
        <div className="flex justify-end mb-4">
          <div className="flex space-x-2">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none"
              onClick={handleToggleView}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="bg-gray-100 text-gray-500 px-4 py-2 rounded hover:bg-gray-200 focus:outline-none"
              onClick={handleToggleView}
            >
              <TableCellsIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-end mb-4">
          <div className="flex space-x-2">
            <button
              type="button"
              className="bg-gray-100 text-gray-500 px-4 py-2 rounded hover:bg-gray-200 focus:outline-none"
              onClick={handleToggleView}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none"
              onClick={handleToggleView}
            >
              <TableCellsIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
      <ContactList
        contacts={contacts}
        isTableView={isTableView}
        handleView={handleView}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggleView={handleToggleView}
        openModalDialog={openModalDialog}
      />
    </div>
  );
};

export default ContactListContainer;
