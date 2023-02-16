import style from "./index.module.css";

const SubmitBtn = (props: { onClick: () => void; text: string }) => {
    return (
        <>
            <div class={style.button} onClick={props.onClick}>
                {props.text}
            </div>
        </>
    );
};

export default SubmitBtn;
