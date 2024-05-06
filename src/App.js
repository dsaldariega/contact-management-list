import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactListContainer from "./containers/ContactListContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactListContainer />} />
        {/* <Route path="/add" element={<ContactModalForm />} /> */}
        {/* <Route path="/edit/:id" element={<ContactFormContainer />} /> */}
        {/* Additional routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
