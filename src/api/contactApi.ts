const BASE_URL = "http://localhost:5000";

export const getAllContacts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`);
    if (!response) {
      console.log("%c Line:7 🥪 response", "color:#f5ce50", response);
      throw new Error("Network response was not OK");
    }
    return response.json();
  } catch (error) {
    return {
      error: "Unable to fetch data. Please try again later",
    };
  }
};

export const getContactById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`);
  return response.json();
};

export const saveContact = async (contact: any) => {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  return response.json();
};

export const updateContact = async (id: string, contact: any) => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  return response.json();
};

export const deleteContact = async (id: string) => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
