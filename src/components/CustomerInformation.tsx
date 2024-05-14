import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getContactById } from "../api/contactApi";

export const CustomerInformation: React.FC = () => {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    contact_number: 0,
  });
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      // Fetch contact details if editing an existing contact
      getContactById(id)
        .then((data) => setContact(data))
        .catch((error) => console.error("Error fetching contact: ", error));
    }
  }, [id]);
  const { name, email, contact_number } = contact;
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-4 d-flex align-items-center">
          <Link to="/" className="text-decoration-none">
            <i className="bi bi-arrow-left" style={{ fontSize: "1.4rem" }} />
          </Link>
          <span className="ms-2">Customer Information</span>
        </div>
        <div className="col-sm-8"></div>
      </div>

      <div className="row">
        <div className="col-sm-4">Name</div>
        <div className="col-sm-4">Email Address</div>
        <div className="col-sm-4">Contact Number</div>
      </div>
      <div className="row">
        <div className="col-sm-4">{name}</div>
        <div className="col-sm-4">{email}</div>
        <div className="col-sm-4">{contact_number}</div>
      </div>
    </div>
  );
};
