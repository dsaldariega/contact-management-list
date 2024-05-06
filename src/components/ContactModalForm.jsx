import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const ContactModalForm = ({
  modalTitle,
  handleSubmit,
  setContact,
  isModalOpen,
  handleCloseModal,
}) => {
  const formInitialValues = {
    name: "",
    email: "",
    contact_number: "",
  };

  const formSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    contact_number: Yup.number().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div
      className={`modal fade ${isModalOpen ? "show" : ""}`}
      id="modal"
      style={{
        display: isModalOpen ? "block" : "none",
        backgroundColor: isModalOpen ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
      }}
    >
      <Formik
        initialValues={formInitialValues}
        validationSchema={formSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{modalTitle}</h1>
                <button
                  type="button"
                  className="btn-close"
                  // data-bs-dismiss="modal"
                  onClick={handleCloseModal}
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
                        <Field
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="contact_number" className="form-label">
                          Contact Number
                        </label>
                        <Field
                          type="number"
                          className="form-control"
                          id="contact_number"
                          name="contact_number"
                        />
                        <ErrorMessage
                          name="contact_number"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <Field
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
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
                  // data-bs-dismiss="modal"
                  onClick={handleCloseModal}
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
        </Form>
      </Formik>
    </div>
  );
};
