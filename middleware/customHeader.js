const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'facu-01'){
            next();
        }else{
            res.status(404);
            res.send({ error: "ERROR" });
        }
    } catch (error) {
        res.status(404);
        res.send({ error: "ERROR" });
       
    }
};


module.exports = customHeader;