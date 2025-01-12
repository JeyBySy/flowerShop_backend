const sendSuccess = (res, data, message = 'Operation successful', statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

const sendError = (res, error, statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        error,
    });
};


module.exports = { sendSuccess, sendError };