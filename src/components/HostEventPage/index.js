import React from "react";
import HostEventForm from "../HostEventForm";
import Navbar from "../Navbar";

import "./hostEventPage.css";
export default function HostEventPage() {
  return (
    <div className="page-body">
      <Navbar />
      <HostEventForm />
    </div>
  );
}
