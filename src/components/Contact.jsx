const Contact = ({ key, contact, handleEdit }) => {
  console.log("%c Line:2 🥕 key", "color:#4fff4B", key);
  const { name, email, contact_number } = contact;
  return (
    
      <div className="contanier">
        <div className="row">
          <div className="col-3">{name}</div>
          <div className="col-3">{email}</div>
          <div className="col-3">{contact_number}</div>
          <div className="col">
            <button type="button" className="btn btn-secondary" onClick={handleEdit}>
              Edit
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Contact;
