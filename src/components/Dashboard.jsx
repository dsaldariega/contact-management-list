import React from "react";
import TableContacts from "./TableContacts";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CardView from "./CardView";
import ModalView from "./ModalView";

export const Dashboard = ({
  contacts,
  handleEdit,
  handleAdd,
  handleDelete,
  handleCardView,
  handleTableView,
  isCardView,
}) => {
  return (
    <div className="container">
      <div>
        Your list of contacts appear here. To add new contact, click on the Add
        New Contact button.
      </div>
      <div>
        {/* <Link to="/add-contact">
          <Button variant="contained" onClick={handleAdd}>
            Add New Contact
          </Button>
        </Link> */}
        <ModalView />
        {!isCardView ? (
          <Button onClick={handleCardView}>Card View</Button>
        ) : (
          <Button onClick={handleTableView}>Table View</Button>
        )}
      </div>
      {!isCardView ? (
        <TableContacts
          contacts={contacts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <CardView contacts={contacts} />
      )}
    </div>
  );
};
