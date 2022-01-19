import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HostEventPage from "../HostEventPage";
import HomePage from "../HomePage";
import DisplayAllEventsPage from "../DisplayAllEventsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/host-event" element={<HostEventPage />} />
        <Route path="/display-all-events" element={<DisplayAllEventsPage />} />
      </Routes>
    </>
  );
}
export default App;
