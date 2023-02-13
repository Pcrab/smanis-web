import { createSignal } from "solid-js";

const buildSignal = <T>(initValue: T) => {
    const [value, setValue] = createSignal(initValue);
    return {
        get: value,
        set: setValue,
    };
};

export default buildSignal;
