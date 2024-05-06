const handlHttpError = (res, message="algo susedio", code=403) => {
    res.status(code);
    res.send({Error:message});
}


module.exports= {handlHttpError};