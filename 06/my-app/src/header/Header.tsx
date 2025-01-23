import React from "react";
import { Title } from "./title/Title.js";
import { Login } from "./login/Login.jsx";
import "./header.css";
export function Header() {
  return (
    <div id="header">
      <Title />
      <Login />
    </div>
  );
}