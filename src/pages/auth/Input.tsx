import { Accessor, Setter } from "solid-js";
import style from "./Input.module.css";

const Input = (props: {
    class?: string;
    value: {
        get: Accessor<string>;
        set: Setter<string>;
    };
    type: string;
    placeholder: string;
    id: string;
}) => {
    return (
        <div class={`${props.class || ""} ${style.input_container || ""}`}>
            <input
                class={style.input}
                id={props.id}
                type={props.type}
                onInput={(e) => {
                    e.currentTarget.setAttribute(
                        "value",
                        e.currentTarget.value,
                    );
                    props.value.set(e.currentTarget.value);
                }}
                aria-aria-labelledby={`label-${props.id}`}
                value=""
            />
            <label class={style.label} for={props.id} id={`label-${props.id}`}>
                <div class={style.text}>{props.placeholder}</div>
            </label>
            {props.type === "password" ? <div></div> : <></>}
        </div>
    );
};

export default Input;
