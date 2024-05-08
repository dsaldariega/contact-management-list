import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ContactListContainer from "./containers/ContactListContainer";
import { CustomerInformation } from "./components/CustomerInformation";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ContactListContainer />} />
        <Route path="/contact/:id" element={<CustomerInformation />} />
        {/* <Route path="/add" element={<ContactModalForm />} /> */}
        {/* <Route path="/edit/:id" element={<ContactFormContainer />} /> */}
        {/* Additional routes if needed */}
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
