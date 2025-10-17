import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Error } from "./components/pages/Error";
import ScrollToTop from "./components/hooks/ScrollToTop";

function App() {
  return (
    <Main>
      <ScrollToTop />
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Main>
  );
}

export default App;
