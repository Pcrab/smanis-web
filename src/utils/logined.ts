import globalId from "../signals/id";
import globalUsername from "../signals/username";
import globalToken from "../signals/token";
import globalAddress from "../signals/address";
import { createEffect } from "solid-js";

const logined = (props: { logined?: () => void; unlogined?: () => void }) => {
    if (props.logined) {
        createEffect(() => {
            if (
                globalId.get() &&
                globalToken.get() &&
                globalUsername.get() &&
                globalAddress.get()
            ) {
                props.logined?.();
            }
        });
    }
    if (props.unlogined) {
        createEffect(() => {
            if (
                !globalId.get() ||
                !globalToken.get() ||
                !globalUsername.get() ||
                !globalAddress.get()
            ) {
                props.unlogined?.();
            }
        });
    }
};

export default logined;
