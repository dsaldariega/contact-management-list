import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

const ModalView = ({ open, handleClose, isEditing, contacts, editContact }) => {
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
  const [newName, setNewName] = useState(name)
  const [newEmail, setNewEmail] = useState(email)
  const [newContactNumber, setNewContactNumber] = useState(contact_number)
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
                label="Name"
                variant="standard"
                defaultValue={isEditing ? name : ""}
                onChange={(e)=> setNewName(e.target.value)}
              />
              <TextField
                required
                id="standard-basic"
                label="Email"
                variant="standard"
                defaultValue={isEditing ? email : ""}
                onChange={(e)=> setNewEmail(e.target.value)}
              />
              <TextField
                required
                id="standard-basic"
                label="Contact Number"
                variant="standard"
                defaultValue={isEditing ? contact_number : ""}
                onChange={(e)=> setNewContactNumber(e.target.value)}
              />
            </Box>
            <Divider />
            <Stack spacing={0.5} direction="row">
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
            </Stack>
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
