import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactListContainer from "./containers/ContactListContainer";
import ContactFormContainer from "./containers/ContactFormContainer";

function App() {
  return (
    <div className="container-fluid">
    <Router>
      <Routes>
        <Route path="/" element={<ContactListContainer />} />
        <Route path="/add" element={<ContactFormContainer />} />
        <Route path="/edit/:id" element={<ContactFormContainer />} />
        {/* Additional routes if needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
