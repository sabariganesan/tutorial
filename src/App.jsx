import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialFunctionComponent from "./pages/InitialFunctionComponent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialFunctionComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
