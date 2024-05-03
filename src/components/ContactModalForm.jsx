import React, { useState } from "react";

export const ContactModalForm = ({
  modalTitle,
  handleSubmit,
  contact,
  setContact,
}) => {
  const { name, email, contact_number } = contact;
  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Name is required"),
  //   email: Yup.string().required("Email is required"),
  //   contact_number: Yup.number().required("Contact Number is required"),
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <form onSubmit={handleSubmit}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {modalTitle}
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
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                      />
                      {/* {errors.name && <p>{errors.name}</p>} */}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact_number" className="form-label">
                        Contact Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="contact_number"
                        name="contact_number"
                        value={contact_number}
                        onChange={handleChange}
                        required
                      />
                      {/* {errors.contact_number && <p>{errors.contact_number}</p>} */}
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
                        value={email}
                        onChange={handleChange}
                        required
                      />
                      {/* {errors.email && <p>{errors.email}</p>} */}
                    </div>
                    <div className="mb-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                // data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
