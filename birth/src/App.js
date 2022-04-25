import { Route, Routes } from "react-router-dom";
import "./App.css";
import Letter from "./pages/Letter";
import Main from "./pages/Main";
import PhotoZone from "./pages/PhotoZone";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/photozone" element={<PhotoZone />} />
    </Routes>
  );
}

export default App;
