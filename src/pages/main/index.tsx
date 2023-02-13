import { useNavigate } from "@solidjs/router";
import logined from "../../utils/logined";

const Main = () => {
    const navigate = useNavigate();
    logined({
        unlogined: () => {
            navigate("/", { replace: true });
        },
    });
    return <div>Main</div>;
};

export default Main;
