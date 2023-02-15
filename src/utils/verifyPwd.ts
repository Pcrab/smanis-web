const verifyPwd = (pwd: string): boolean => {
    if (pwd.length < 8) {
        return false;
    }
    return true;
};

export default verifyPwd;
