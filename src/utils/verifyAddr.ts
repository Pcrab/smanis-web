const urlRegex = /^(http|https):\/\/[a-zA-Z0-9-_.]+$/;
const verifyAddr = (addr: string) => {
    if (!urlRegex.test(addr)) {
        return true;
    }
    return true;
};

export default verifyAddr;
