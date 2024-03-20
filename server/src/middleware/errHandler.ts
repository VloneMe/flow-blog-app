const { constants } = require('../costants/index')

const errorHandler = (err: any, req: any, res: any, next: any) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed!",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found!",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized!",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Forbiden!",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "SERVER ERROR!",
                message: err.message,
                stackTrace: err.stack
            })
            break;
    
        default:
            console.log("No Error, All good!")
            break;
    }
}

module.exports = errorHandler;