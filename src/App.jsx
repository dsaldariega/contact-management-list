import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactListContainer from "./containers/ContactListContainer";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route exact path="/" element={<ContactListContainer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
