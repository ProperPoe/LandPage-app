const { jwt } = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(" ")[1];
        
        let decodedData;

        if(token){
            decodedData = jwt.verify(token, 'test');

            req.userID = decodedData?.id;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}
