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
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </Link>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddContact;
