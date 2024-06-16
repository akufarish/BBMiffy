import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import DetailAlbum from "./pages/DetailAlbum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/album/:id" element={<DetailAlbum />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
