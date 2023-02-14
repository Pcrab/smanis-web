import globalId from "../../../../signals/id";
import globalToken from "../../../../signals/token";
import globalUsername from "../../../../signals/username";
import currentStudent from "../../signals/currentStudent";
import students from "../../signals/students";

const Settings = () => {
    return (
        <div
            onClick={() => {
                currentStudent.set("");
                students.set([]);
                localStorage.clear();
                globalId.set("");
                globalToken.set("");
                globalUsername.set("");
            }}
        >
            Logout
        </div>
    );
};

export default Settings;
