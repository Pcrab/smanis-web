import buildSignal from "../../utils/buildSignal";
import address from "./signals/address";
import errorMsg from "./signals/errorMsg";
import password from "./signals/password";
import id from "./signals/id";
import globalId from "../../signals/id";
import globalUsername from "../../signals/username";
import globalToken from "../../signals/token";
import globalAddress from "../../signals/address";

import style from "./SubmitBtn.module.css";

const firstSubmit = buildSignal(true);
const submitting = buildSignal(false);

const SubmitBtn = () => {
    const submit = async () => {
        if (submitting.get()) {
            return;
        }
        if (!id.get() || !password.get() || !address.get()) {
            const msg = "id || password || address is empty";
            errorMsg.set(msg);
            console.warn(msg);
            return;
        }

        console.log("Submitting...");
        submitting.set(true);
        firstSubmit.set(false);

        const additionalSlash = address.get().endsWith("/") ? "" : "/";

        let msg = "";
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
                msg = "Login failed";
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
        } catch {
            msg = "Login failed";
        } finally {
            submitting.set(false);
            if (msg !== "") {
                console.error(msg);
            }
            errorMsg.set(msg);
        }

        return;
    };

    return (
        <>
            <div class={style.submitBtn} onClick={() => void submit()}>
                {submitting.get()
                    ? "Cycle"
                    : firstSubmit.get()
                    ? "Submit"
                    : "Retry"}
            </div>
        </>
    );
};

export default SubmitBtn;
