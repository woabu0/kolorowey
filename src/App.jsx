import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Pages/Homepage";
import { TermsOfUse } from "./components/Pages/TermsOfUse";
import { DPA } from "./components/Pages/DPA"
import { PrivacyPolicy } from "./components/Pages/PrivacyPolicy";
import { Errorpage } from "./components/Pages/Errorpage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Main>
      <ScrollToTop />
      <Routes> 
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/terms-of-use" element={<TermsOfUse />} />
        <Route exact path="/dpa" element={<DPA />} />
        <Route exact path="/privacypage" element={<PrivacyPolicy />} />
        <Route exact path="*" element={<Errorpage />} />
      </Routes>
    </Main>
  );
}

export default App;
