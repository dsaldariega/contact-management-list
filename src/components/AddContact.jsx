import React from "react";

const AddContact = () => {
  return (
    <div className="container">
      {/* <div
        className="modal fade"
        id="addContactModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      > */}
        {/* <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body"> */}
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
              <button
                type="button"
                className="btn btn-danger"
                // data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        // </div>
    //   </div>
    // </div>
  );
};

export default AddContact;
