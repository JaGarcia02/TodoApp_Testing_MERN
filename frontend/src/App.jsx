import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Todo_App_Page from "./pages/Todo_App_Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo_App_Page />} />
      </Routes>
    </>
  );
}

export default App;
