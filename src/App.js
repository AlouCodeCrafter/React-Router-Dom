import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil";

import Anonce1 from "./pages/Anonce1";
import Anonce2 from "./pages/Anonce2";
import Anonce3 from "./pages/Anonce3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/anonce1" element={<Anonce1 />} />
        <Route path="/anonce2" element={<Anonce2 />} />
        <Route path="/anonce3" element={<Anonce3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
