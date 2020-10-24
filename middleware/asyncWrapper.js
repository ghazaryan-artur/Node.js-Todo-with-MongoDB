module.exports = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
        next();
    } catch (error) {
        next(error);
    }
}