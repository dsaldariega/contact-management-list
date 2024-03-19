import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  console.log("%c Line:12 🥚 isEditing", "color:#33a5ff", isEditing);

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

  const handleEdit = (e) => {
    console.log("%c Line:28 🍧 e", "color:#b03734", e);
    // setIsEditing(true);
    //fix setIsEditing
  };

  return (
    <Routes>
      <Route
        path="/contacts"
        element={
          <Dashboard
            contacts={contacts}
            handleEdit={handleEdit}
            // handleAddContact={handleAddContact}
          />
        }
      ></Route>
      <Route path="/add-contact" element={<AddContact />}></Route>
      <Route path="/edit-contact" element={<ContactForm />}></Route>
    </Routes>
  );
}

export default App;
