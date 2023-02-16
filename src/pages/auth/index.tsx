import { useNavigate } from "@solidjs/router";

import logined from "../../utils/logined";
import id from "./signals/id";
import password from "./signals/password";
import address from "./signals/address";

import SubmitBtn from "./SubmitBtn";
import Input from "../../components/Input";
import verifyId from "../../utils/verifyId";
import verifyPwd from "../../utils/verifyPwd";
import verifyAddr from "../../utils/verifyAddr";
import errorMsg from "./signals/errorMsg";

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
            <Input
                id="id"
                placeholder="用户 ID"
                type="text"
                value={id}
                verify={verifyId}
            />
            <Input
                id="password"
                placeholder="用户密码"
                type="password"
                value={password}
                verify={verifyPwd}
            />
            <Input
                id="address"
                placeholder="服务器地址"
                type="text"
                value={address}
                verify={verifyAddr}
            />
            <div class="my-2">
                <SubmitBtn />
            </div>
            <div class="mx-2rem" style={"color: var(--error);"}>
                {errorMsg.get()}
            </div>
        </div>
    );
};

export default Auth;
