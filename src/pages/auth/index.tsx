import { useNavigate } from "@solidjs/router";

import logined from "../../utils/logined";
import id from "./signals/id";
import password from "./signals/password";
import address from "./signals/address";
import SubmitBtn from "./SubmitBtn";

const Auth = () => {
    const navigate = useNavigate();
    logined({
        logined: () => {
            navigate("/main", { replace: true });
        },
    });

    return (
        <div>
            <div>Logo</div>
            <input
                type="text"
                placeholder="用户名"
                onInput={(e) => {
                    id.set(e.currentTarget.value);
                }}
            />
            {id.get()}
            <input
                type="password"
                placeholder="密码"
                onInput={(e) => {
                    password.set(e.currentTarget.value);
                }}
            />
            {password.get()}
            <input
                type="text"
                placeholder="服务器地址"
                onInput={(e) => {
                    address.set(e.currentTarget.value);
                }}
            />
            {address.get()}
            <div>
                <SubmitBtn />
            </div>
        </div>
    );
};

export default Auth;
