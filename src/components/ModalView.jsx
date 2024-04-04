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

const ModalView = ({ contacts }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const styleDiv = {
    py: 0,
    width: "100%",
    maxWidth: 360,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };
  return (
    <div>
      <div>
        <Button onClick={handleOpen} variant="contained">Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <List sx={styleDiv}>
      <ListItem>
        <ListItemText primary="Full width variant below" />
      </ListItem>
      
      <ListItem>
        <ListItemText primary="Inset variant below" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText primary="Middle variant below" />
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem>
        <ListItemText primary="List item" />
      </ListItem>
    </List> */}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add New Contact
            </Typography>
            <Divider />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Body
            </Typography>
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
              />
              <TextField
                required
                id="standard-basic"
                label="Email"
                variant="standard"
              />
              <TextField
                required
                id="standard-basic"
                label="Contact Number"
                variant="standard"
              />
            </Box>
            <Divider />
            <Link to="/contacts">
              <Button type="button" variant="contained" color="error" onClick={handleClose}>
                Cancel
              </Button>
            </Link>
            <Button type="button" variant="contained">
              Save
            </Button>
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
