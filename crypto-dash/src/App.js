import React from "react";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
import Settings from "./components/Settings/Settings";
import Content from "./components/Shared/Content";
import "./App.css";

function App() {
  return (
    <AppLayout className="App">
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
