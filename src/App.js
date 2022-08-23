import React from "react";
import ListUsers from "./features/Users/ListUsers";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AddUser from "./features/Users/AddUser";
import EditUser from "./features/Users/EditUser";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/users" exact element={<ListUsers />}></Route>
        <Route path="/addUser" exact element={<AddUser />}></Route>
        <Route path="/editUser/:userId" exact element={<EditUser />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
