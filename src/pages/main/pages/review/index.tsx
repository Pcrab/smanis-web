import students from "../../signals/students";
import { For } from "solid-js";

const Review = () => {
    return (
        <For each={students.get()}>
            {(student, i) => {
                return (
                    <div>
                        <div>{student}</div>
                        <div>{i()}</div>
                    </div>
                );
            }}
        </For>
    );
};

export default Review;
