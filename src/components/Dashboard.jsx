import React from "react";
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
        {/* {!isCardView ? (
          <Button onClick={handleCardView}>Card View</Button>
        ) : (
          <Button onClick={handleTableView}>Table View</Button>
        )} */}
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
