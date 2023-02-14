import { Show } from "solid-js";
import buildSignal from "../../../../utils/buildSignal";
import currentStudent from "../../signals/currentStudent";

const currentInput = buildSignal("");

const Exam = () => {
    return (
        <>
            <div>Exam page</div>
            <Show
                when={currentStudent.get() !== ""}
                fallback={() => (
                    <div>
                        <input
                            onInput={(e) => {
                                currentInput.set(e.currentTarget.value);
                            }}
                            placeholder="Student ID"
                        />
                        <div
                            onClick={() => {
                                currentStudent.set(currentInput.get());
                            }}
                        >
                            Confirm
                        </div>
                    </div>
                )}
            >
                <div>{currentStudent.get()}</div>
                <div
                    onClick={() => {
                        currentStudent.set("");
                        currentInput.set("");
                    }}
                >
                    Change Student
                </div>
            </Show>
        </>
    );
};

export default Exam;
