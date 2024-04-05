import React, { useState } from "react";
import TableContacts from "./TableContacts";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CardView from "./CardView";
import ModalView from "./ModalView";
import GridViewIcon from "@mui/icons-material/GridView";
import TableViewIcon from "@mui/icons-material/TableView";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const Dashboard = ({
  contacts,
  handleEdit,
  handleAdd,
  handleDelete,
  handleView,
  isContactView,
  open,
  handleOpen,
  handleClose,
  isEditing,
  editContact
}) => {
  return (
    <div className="container">
      <div>
        Your list of contacts appear here. To add new contact, click on the Add
        New Contact button.
      </div>
      <div>
        <ModalView
          handleClose={handleClose}
          open={open}
          isEditing={isEditing}
          contacts={contacts}
          editContact={editContact}
        />
        <Button onClick={handleOpen} variant="contained">
          Add New Contact
        </Button>
        <ToggleButtonGroup
          value={isContactView}
          exclusive
          onChange={handleView}
        >
          <ToggleButton value="card" aria-label="card view">
            <GridViewIcon />
          </ToggleButton>
          <ToggleButton value="table" aria-label="table view">
            <TableViewIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      {isContactView == "table" ? (
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
