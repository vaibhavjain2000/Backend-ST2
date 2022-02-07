import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddContact from "./AddContact";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<AddContact />} />
      </Routes>
    </div>
  );
}

export default App;
