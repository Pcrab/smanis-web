const idRegex = /[0-9a-fA-F]{24}/;

const verifyId = (id: string): string => {
    if (!idRegex.test(id)) {
        return "Invalid ID";
    }
    return "";
};

export default verifyId;
