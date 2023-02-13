import buildSignal from "../utils/buildSignal";

const address = buildSignal(localStorage.getItem("address") || "");

export default address;
