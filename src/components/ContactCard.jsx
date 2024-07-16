import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

const ContactCard = ({ contact, openModalDialog }) => {
  return (
    <div
      className="bg-white shadow-md rounded-md p-4 mb-4 cursor-pointer hover:bg-gray-100 transition-all"
      onClick={() => openModalDialog("view", contact.id)}
    >
      <div className="flex flex-col">
        <h5 className="text-xl font-bold mb-2">{contact.name}</h5>
        <p className="text-gray-600 mb-1">Email: {contact.email}</p>
        <p className="text-gray-600">
          Contact Number: {contact.contact_number}
        </p>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded-md focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            openModalDialog("view", contact.id);
          }}
        >
          <EyeIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            openModalDialog("delete", contact.id);
          }}
        >
          <TrashIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            openModalDialog("edit", contact.id);
          }}
        >
          <PencilIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
