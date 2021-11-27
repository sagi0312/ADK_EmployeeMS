import ListEmployees from "./components/ListEmployees";
import Anju from "./components/Anju";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListEmployees />} />

          <Route path="/about" element={<Anju />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
