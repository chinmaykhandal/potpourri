import React from 'react';
import Navbar from "./components/Navbar";
import Login from "./components/Login" 
import Main from "./components/Main";
import Search from "./components/Search";
import Upload from "./components/Upload";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
