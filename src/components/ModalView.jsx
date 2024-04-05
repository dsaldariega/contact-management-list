import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const ModalView = ({ open, handleClose, isEditing, contacts, editContact }) => {
  console.log("%c Line:14 🧀 isEditing", "color:#ffdd4d", isEditing);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 20,
    p: 4,
  };
  const { name, email, contact_number } = editContact;
  console.log("%c Line:27 🌰 name", "color:#465975", name);
  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {isEditing ? "Edit Contact" : "Add New Contact"}
            </Typography>
            <Divider />
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="standard-basic"
                // label="Name"
                variant="standard"
                value={isEditing ? name : ""}
              />
              <TextField
                required
                id="standard-basic"
                // label="Email"
                variant="standard"
                value={isEditing ? email : ""}
              />
              <TextField
                required
                id="standard-basic"
                label="Contact Number"
                variant="standard"
                value={isEditing ? contact_number : ""}
              />
            </Box>
            <Divider />
            <Box component="form">
              <Button
                type="button"
                variant="contained"
                color="error"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button type="button" variant="contained">
                Save
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
      {/* <div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" className="form-control" />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <Link to="/contacts">
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </Link>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </div> */}
    </div>
  );
};

export default ModalView;
