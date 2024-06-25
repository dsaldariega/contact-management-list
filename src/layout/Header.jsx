import React from "react";

export const Header = ({ openModalDialog }) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2">Contacts Information</h2>
        <p className="text-gray-600">
          Your list of customers appears here. To add a new contact, click on
          the Add New Contact button.
        </p>
      </div>
      <button
        type="button"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => openModalDialog("add")}
      >
        Add New Contact
      </button>
    </div>
  );
};
