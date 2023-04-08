const successHandle = (res, data) => {
    if(data) {
        res.send({
            status: true,
            data
        }).end();
    };
}

module.exports = successHandle;