import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import EditPage from "./pages/EditPage";
import "./App.css";
import ShowPage from "./pages/ShowPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<CreateForm />} />
          <Route path="/:id/edit" element={<EditPage />} />
          <Route path="/show/:id" element={<ShowPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
