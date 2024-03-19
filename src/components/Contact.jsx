const Contact = ({ contact }) => {
  const { name, email, contact_number } = contact;
  return (
    <div>
      <div className="col-sm">{name}</div>
      <div className="col-sm">{email}</div>
      <div className="col-sm">{contact_number}</div>
      <button type="button" className="btn btn-danger">Delete</button>
    </div>
  );
};

export default Contact;
