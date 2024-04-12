import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isContactView, setIsContactView] = useState("card");
  const [isEditing, setIsEditing] = useState(false);
  const [editContact, setEditContact] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };
    getContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:5000/contacts");
    const data = await res.json();
    return data;
  };

  const handleEdit = (e, contact) => {
    setIsEditing(true);
    handleOpen();
    setEditContact(contact);
  };

  const handleDelete = (id) => {
    console.log("%c Line:31 🍐 id", "color:#ea7e5c", id);
  };

  const handleView = (e, newView) => {
    if (newView !== null) {
      setIsContactView(newView);
    }
  };

  return (
    <Routes>
      <Route
        path="/contacts"
        element={
          <Dashboard
            contacts={contacts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleView={handleView}
            // handleTableView={handleTableView}
            isContactView={isContactView}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            isEditing={isEditing}
            editContact={editContact}
          />
        }
      ></Route>
      <Route path="/add-contact" element={<AddContact />}></Route>
      <Route path="/edit-contact" element={<ContactForm />}></Route>
    </Routes>
  );
}

export default App;
