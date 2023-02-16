const pwdRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,128}$/;

const verifyPwd = (pwd: string): string => {
    if (pwd.length < 8 || pwd.length > 128) {
        return "Password must be between 8 and 128 characters long";
    }
    if (!pwdRegex.test(pwd)) {
        return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }
    return "";
};

export default verifyPwd;
