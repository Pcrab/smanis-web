/* @refresh reload */
import { render } from "solid-js/web";
import { Router, hashIntegration } from "@solidjs/router";
import "./clear.css";
import App from "./App";
import "virtual:uno.css";

const root = document.getElementById("root");

if (!(root instanceof HTMLElement)) {
    throw new Error("Root element not found!");
}

render(
    () => (
        <Router source={hashIntegration()}>
            <App />
        </Router>
    ),
    root,
);
