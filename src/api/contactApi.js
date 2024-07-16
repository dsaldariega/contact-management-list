const BASE_URL = process.env.REACT_APP_API_PROD_URL;

export const getAllContacts = async () => {
  const response = await fetch(`${BASE_URL}/contacts`);
  return response.json();
};

export const getContactById = async (id) => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`);
  return response.json();
};

export const saveContact = async (contact) => {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  return response.json();
};

export const updateContact = async (id, contact) => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  return response.json();
};

export const deleteContact = async (id) => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
