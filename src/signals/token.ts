import buildSignal from "../utils/buildSignal";

const token = buildSignal(localStorage.getItem("token") || "");

export default token;
