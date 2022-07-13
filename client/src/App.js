import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import EditPage from "./pages/EditPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/new" index element={<CreateForm />} />
          <Route path="/:id/edit" index element={<EditPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
