import { useNavigate } from "@solidjs/router";

import logined from "../../utils/logined";
import id from "./signals/id";
import password from "./signals/password";
import address from "./signals/address";
import SubmitBtn from "./SubmitBtn";
import Input from "./Input";

const Auth = () => {
    const navigate = useNavigate();
    logined({
        logined: () => {
            navigate("/main", { replace: true });
        },
    });

    return (
        <div class="flex flex-col justify-center items-center h-80%">
            <div>Logo</div>
            <Input id="id" placeholder="用户 ID" type="text" value={id} />
            <Input
                id="password"
                placeholder="用户密码"
                type="password"
                value={password}
            />
            <Input
                id="address"
                placeholder="服务器地址"
                type="text"
                value={address}
            />
            <SubmitBtn />
        </div>
    );
};

export default Auth;
