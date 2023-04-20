import React from "react";
import Results from "./components/results/Results";
import { ToastContainer } from "react-toastify";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <Results />
      {/* Notificaciones 👇*/}
      <ToastContainer />
    </div>
  );
}