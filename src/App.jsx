import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Watch from "./components/Watch";
import Feed from "./components/Feed";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Body />}>
          {/* Child Routes */}
          {/* Whenever root is visit Body will be shown Body have outlet and outlet refers to children so root child shows feed too */}
          <Route index element={<Feed />} />   
          <Route path="watch" element={<Watch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
