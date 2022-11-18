import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/PostView/Posts";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<h1>Not FOund</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
