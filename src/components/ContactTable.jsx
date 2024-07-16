import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

const ContactTable = ({ contacts, openModalDialog }) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {contact.contact_number}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <button
                  className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={() => openModalDialog("view", contact.id)}
                >
                  <EyeIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => openModalDialog("delete", contact.id)}
                >
                  <TrashIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => openModalDialog("edit", contact.id)}
                >
                  <PencilIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
