import { useNavigate } from "@solidjs/router";
import logined from "../../utils/logined";
import buildSignal from "../../utils/buildSignal";
import Review from "./pages/review";
import Exam from "./pages/exam";
import Settings from "./pages/settings";
import { Dynamic } from "solid-js/web";

const pages = {
    exam: Exam,
    review: Review,
    settings: Settings,
};

const currentPage = buildSignal<keyof typeof pages>("review");

const Main = () => {
    const navigate = useNavigate();
    logined({
        logined: () => {
            currentPage.set("review");
        },
        unlogined: () => {
            navigate("/", { replace: true });
        },
    });
    return (
        <div>
            <div>
                <Dynamic component={pages[currentPage.get()]} />
            </div>
            <div>
                <div
                    onClick={() => {
                        currentPage.set("exam");
                    }}
                >
                    Exam
                </div>
                <div
                    onClick={() => {
                        currentPage.set("review");
                    }}
                >
                    Review
                </div>
                <div
                    onClick={() => {
                        currentPage.set("settings");
                    }}
                >
                    Settings
                </div>
            </div>
        </div>
    );
};

export default Main;
