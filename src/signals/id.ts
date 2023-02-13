import buildSignal from "../utils/buildSignal";

const id = buildSignal(localStorage.getItem("id") || "");

export default id;
