import React, { useState } from "react";
import Profile from "./app/Profile";
import Login from "./app/Login";
import "./App.css";
import Changecolor from "./app/Changecolor";

function App() {
  return (
<div className="App">
<Profile />
<Login />
<Changecolor />
</div>

  );
}

export default App;