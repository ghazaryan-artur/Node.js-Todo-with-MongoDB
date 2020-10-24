exports.errorHandler = (err, req, res, next) => {
    console.log("error");
    console.log(err)

    let message;
    let status;
    switch (err.name) {
        case 'ValidationError' :
            console.log("validation sluchay sluchay")
            status = 400;
            message = "Invalid data";
            break;
        case 'CastError' :
            console.log("cast sluchay")
            status = 404;
            message = "Todo not found";
            break;
        default :
        console.log('default sluchay');
            status = 500;
            message =  "Internal Server Error";
    } 
    // if error thrown manual - sent it, if auto-generated sent res that given from switch
    res.status(err.status || status).json({
        success: false,
        error: err.msg || message 
    });
};
