import React from "react";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import "./App.css";

function App() {
  return (
    <AppLayout className="App">
      <AppBar />
      <h1>crypto</h1>
    </AppLayout>
  );
}

export default App;
