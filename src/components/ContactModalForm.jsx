import React from "react";
import { Link } from "react-router-dom";

export const ContactModalForm = ({ contact, onChange, onSubmit }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <form onSubmit={onSubmit}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={contact.name}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={contact.email}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={contact.phone}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
