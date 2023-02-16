import globalId from "../../signals/id";
import globalUsername from "../../signals/username";
import globalToken from "../../signals/token";
import globalAddress from "../../signals/address";

import id from "./signals/id";
import password from "./signals/password";
import address from "./signals/address";

import buildSignal from "../../utils/buildSignal";
import Button from "../../components/Button";
import verifyId from "../../utils/verifyId";
import verifyPwd from "../../utils/verifyPwd";
import verifyAddr from "../../utils/verifyAddr";
import errorMsg from "./signals/errorMsg";

const firstSubmit = buildSignal(true);
const submitting = buildSignal(false);

const submit = async () => {
    if (submitting.get()) {
        console.log("Previous submit has not finished");
        return;
    }
    if (!id.get() || !password.get() || !address.get()) {
        const msg = "id || password || address is empty";
        console.warn(msg);
        return;
    }

    if (
        verifyId(id.get()) !== "" ||
        verifyPwd(password.get()) !== "" ||
        verifyAddr(address.get()) !== ""
    ) {
        const msg = "id || password || address is invalid";
        console.warn(msg);
        return;
    }

    console.log("Submitting...");
    submitting.set(true);
    firstSubmit.set(false);

    const additionalSlash = address.get().endsWith("/") ? "" : "/";

    let msg = "";
    errorMsg.set(msg);
    try {
        const fetchResult = await fetch(
            address.get() + additionalSlash + "loginAdmin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: id.get(),
                    password: password.get(),
                }),
            },
        );
        if (!fetchResult.ok) {
            msg = ((await fetchResult.json()) as { message: string }).message;
            return;
        }
        const result = (await fetchResult.json()) as {
            id?: string;
            username?: string;
            token?: string;
        };

        localStorage.setItem("id", result.id || "");
        localStorage.setItem("token", result.token || "");
        localStorage.setItem("username", result.username || "");
        localStorage.setItem("address", address.get());

        globalId.set(result.id || "");
        globalToken.set(result.token || "");
        globalUsername.set(result.username || "");
        globalAddress.set(address.get());

        id.set("");
        password.set("");
        address.set("");
        firstSubmit.set(true);
    } catch (e) {
        msg = `Unknown error: ${e as string}`;
    } finally {
        submitting.set(false);
        errorMsg.set(msg);
        if (msg !== "") {
            console.error(msg);
        }
    }

    return;
};

const SubmitBtn = () => {
    return (
        <Button
            onClick={() => void submit()}
            text={
                submitting.get()
                    ? "Cycle"
                    : firstSubmit.get()
                    ? "Submit"
                    : "Retry"
            }
        />
    );
};

export default SubmitBtn;
