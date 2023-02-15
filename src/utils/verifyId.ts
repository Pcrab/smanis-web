const verifyId = (id: string): boolean => {
    if (id.length !== 32) {
        return false;
    }
    return true;
};

export default verifyId;
