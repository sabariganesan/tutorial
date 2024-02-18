import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EffectComponent from "./pages/EffectComponent";
import InitialFunctionComponent from "./pages/InitialFunctionComponent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialFunctionComponent />} />
        <Route path="/effect" element={<EffectComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
