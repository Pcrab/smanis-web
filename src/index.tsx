/* @refresh reload */
import { render } from "solid-js/web";
import { Router, hashIntegration } from "@solidjs/router";
import App from "./App";

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
