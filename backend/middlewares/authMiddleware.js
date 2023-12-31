const userModel = require("../models/userModel.js");
const JWT = require("jsonwebtoken");

const requireSignIn = async(req,res,next) =>{
    try {
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).send({
            success : false,
            message : "Error in isAdmin niddleware",
            error
        })
    }
}

const isAdmin = async (req,res,next) =>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1)
        {
            return res.status(401).send({
                success : false,
                message : "Unauthorized Access"
            })
        }
        next();
    } catch (error) {
        res.status(401).send({
            success : false,
            message : "Error in admin niddleware",
            error
        })
    }
}

module.exports = {
    requireSignIn,
    isAdmin
};