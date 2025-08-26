import { Navigate, Route, Routes } from "react-router-dom";
import { Body } from "@/app/pages/Body";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
