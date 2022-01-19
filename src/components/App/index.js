import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HostEventPage from "../HostEventPage";
import HomePage from "../HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/host-event" element={<HostEventPage />} />
      </Routes>
    </>
  );
}
export default App;
