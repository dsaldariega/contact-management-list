import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import ContactListContainer from "./containers/ContactListContainer";
import { CustomerInformation } from "./components/CustomerInformation";
import { PageNotFound } from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactListContainer />} />
        <Route path="/contact/:id" element={<CustomerInformation />} />
        {/* Additional routes if needed */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
