import buildSignal from "../utils/buildSignal";

const username = buildSignal(localStorage.getItem("username") || "");

export default username;
