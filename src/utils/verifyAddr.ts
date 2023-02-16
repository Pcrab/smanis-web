const urlRegex = /^(http|https):\/\/[a-zA-Z0-9-_.]+(:[0-9]+)?$/;
const verifyAddr = (addr: string): string => {
    if (!urlRegex.test(addr)) {
        return "Invalid URL";
    }
    return "";
};

export default verifyAddr;
