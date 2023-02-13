const verifyConnection = async () => {
    try {
        const fetchResult = await fetch("");
        if (!fetchResult.ok) {
            return false;
        }
        const result = (await fetchResult.json()) as { hello?: "world" };
        return result.hello === "world";
    } catch {
        return false;
    }
};

export default verifyConnection;
