import { Button } from "@mui/base";
import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <div className="container">
      <div>
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
          <Button type="button" variant="contained" color="error">
            Cancel
          </Button>
        </Link>
        <Button type="button" variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddContact;
