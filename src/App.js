import { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModal, setIsModal] = useState(false);
  console.log("%c Line:9 🍩 isModal", "color:#42b983", isModal);

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };
    getContacts();
  }, []);

  // useEffect(() => {
  //   if (isModal === true) {
  //     return <AddContact />;
  //   }
  // }, [isModal]);

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:5000/contacts");
    const data = await res.json();
    return data;
  };

  const handleAddContact = (e) => {
    setIsModal(true);
  };

  return (
    <div className="container">
      <div>Contact Information</div>

      <div></div>
      {isModal ? (
        <AddContact />
      ) : (
        <div>
          <div>
            Your list of contacts appear here. To add new contact, click on the
            Add New Contact button.
          </div>
          <div>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#addContactModal"
              onClick={handleAddContact}
            >
              Add New Contact
            </button>
          </div>
          <Contacts contacts={contacts} />
        </div>
      )}
    </div>
  );
}

export default App;
