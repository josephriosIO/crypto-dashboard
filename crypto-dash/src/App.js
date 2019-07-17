import React from "react";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
import "./App.css";

function App() {
  return (
    <AppLayout className="App">
      <AppProvider>
        <AppBar />
        <h1>Welcome to Crypto Look</h1>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
