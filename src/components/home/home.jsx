import React from "react";
import "./home.css";
import NavBar from "../nav/NavBar";
import { Typography } from "@material-ui/core";

export default function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home" id="home-content">
        <Typography variant="h2" style={{ marginBottom: "12px" }}>
          Blair Harper
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: "12px" }}>
          Software Engineer | Edinburgh | blair@blairharper.dev
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: "12px" }}>
          I work for <a href="https://passio.co.uk">Passio</a>, a digital agency
          with accessibility at its core.
        </Typography>
      </div>
    </div>
  );
}
