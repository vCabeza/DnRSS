import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RSSDetail from "./Components/RSSDetail";
import RSSList from "./Components/RSSList";

function App() {
  return (
    <BrowserRouter>
      <h1 className="font-semibold tracking-tight text-4xl p-4">D&RSS</h1>
      <Routes>
        <Route index path="/" element={<RSSList />} />
        <Route path="/details" element={<RSSDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
