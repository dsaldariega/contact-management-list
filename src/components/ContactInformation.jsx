import React, { useEffect, useState } from "react";
import { getContactById } from "../api/contactApi";
import { Link, useParams } from "react-router-dom";

export const ContactInformation = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    contact_number: "",
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
    <div className="mx-auto max-w-4xl px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            <i className="text-xl" />
          </Link>
          <span className="ml-2 text-lg font-semibold">
            Contact Information
          </span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="font-semibold">Name</div>
        <div className="font-semibold">Email Address</div>
        <div className="font-semibold">Contact Number</div>
      </div>

      <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>{name}</div>
        <div>{email}</div>
        <div>{contact_number}</div>
      </div>
    </div>
  );
};
