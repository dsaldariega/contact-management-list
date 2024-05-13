import React from "react";

interface ContactModalFormProps {
  modalTitle: any;
  handleSubmit: any;
  setContact: any;
  contact: any;
  isModalOpen: any;
  handleCloseModal: any;
}
export const ContactModalForm: React.FC<ContactModalFormProps> = ({
  modalTitle,
  handleSubmit,
  setContact,
  contact,
  isModalOpen,
  handleCloseModal,
}) => {
  const { name, contact_number, email } = contact;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContact((prevContact: any) => ({ ...prevContact, [name]: value }));
  };

  return (
    <div
      className={`modal fade ${isModalOpen ? "show" : ""}`}
      id="modal"
      style={{
        display: isModalOpen ? "block" : "none",
        backgroundColor: isModalOpen ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5">{modalTitle}</h1>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Close"
              ></button>
            </div> */}
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
                      />
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
                        value={email}
                        onChange={handleChange}
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
      </form>
    </div>
  );
};
