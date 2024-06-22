import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Pages/Homepage";
import { Loginpage } from "./components/Pages/Loginpage";
import { Privacypage } from "./components/Pages/Privacypage";
import { Errorpage } from "./components/Pages/Errorpage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Main>
      <ScrollToTop />
      <Routes> 
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/loginpage" element={<Loginpage />} />
        <Route exact path="/privacypage" element={<Privacypage />} />
        <Route exact path="*" element={<Errorpage />} />
      </Routes>
    </Main>
  );
}

export default App;
