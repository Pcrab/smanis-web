import { useNavigate } from "@solidjs/router";
import logined from "../../utils/logined";
import buildSignal from "../../utils/buildSignal";
import Review from "./pages/review";
import Exam from "./pages/exam";
import Settings from "./pages/settings";
import { Dynamic } from "solid-js/web";

import style from "./index.module.css";

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
        <>
            <div>
                <Dynamic component={pages[currentPage.get()]} />
            </div>
            <div class={style.navigation_bar}>
                <div
                    class={style.item}
                    onClick={() => {
                        currentPage.set("exam");
                    }}
                >
                    <div
                        class={
                            (style.icon_bg || "") +
                            (currentPage.get() === "exam"
                                ? " " + (style.active || "")
                                : "")
                        }
                    >
                        <div
                            class={(style.icon || "") + " i-mdi-tennis-ball"}
                        ></div>
                    </div>
                    <div>Exam</div>
                </div>
                <div
                    class={style.item}
                    onClick={() => {
                        currentPage.set("review");
                    }}
                >
                    <div
                        class={
                            (style.icon_bg || "") +
                            (currentPage.get() === "review"
                                ? " " + (style.active || "")
                                : "")
                        }
                    >
                        <div
                            class={(style.icon || "") + " i-mdi-tennis-ball"}
                        ></div>
                    </div>
                    <div>Review</div>
                </div>
                <div
                    class={style.item}
                    onClick={() => {
                        currentPage.set("settings");
                    }}
                >
                    <div
                        class={
                            (style.icon_bg || "") +
                            (currentPage.get() === "settings"
                                ? " " + (style.active || "")
                                : "")
                        }
                    >
                        <div class={(style.icon || "") + " i-mdi-cog"}></div>
                    </div>
                    <div>Settings</div>
                </div>
            </div>
        </>
    );
};

export default Main;
