import { Accessor, Setter } from "solid-js";
import buildSignal from "../../utils/buildSignal";
import style from "./index.module.css";

const Input = (props: {
    class?: string;
    value: {
        get: Accessor<string>;
        set: Setter<string>;
    };
    verify?: (value: string) => string;
    type: string;
    placeholder: string;
    id: string;
}) => {
    const errorMsg = buildSignal("");

    return (
        <>
            <div class={`${props.class || ""} ${style.input_container || ""}`}>
                <input
                    class={`${style.input || ""} ${
                        errorMsg.get() ? style.error || "" : ""
                    }`}
                    id={props.id}
                    type={props.type}
                    onInput={(e) => {
                        e.currentTarget.setAttribute(
                            "value",
                            e.currentTarget.value,
                        );
                        props.value.set(e.currentTarget.value);
                        if (props.verify) {
                            const msg = props.verify(e.currentTarget.value);
                            errorMsg.set(msg);
                        }
                    }}
                    aria-aria-labelledby={`label-${props.id}`}
                    value=""
                />
                <label
                    class={style.label}
                    for={props.id}
                    id={`label-${props.id}`}
                >
                    <div
                        class={`${style.text || ""} ${
                            errorMsg.get() ? style.error || "" : ""
                        }`}
                    >
                        {props.placeholder}
                    </div>
                </label>
            </div>
            <div class={`${style.error_msg || ""} ${style.error || ""}`}>
                {errorMsg.get()}
            </div>
        </>
    );
};

export default Input;
