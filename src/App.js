import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactListContainer from "./containers/ContactListContainer";
import { CustomerInformation } from "./components/CustomerInformation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactListContainer />} />
        {/* <Route path="/add" element={<ContactModalForm />} /> */}
        {/* <Route path="/edit/:id" element={<ContactFormContainer />} /> */}
        <Route path="/contact/:id" element={<CustomerInformation />} />
        {/* Additional routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
