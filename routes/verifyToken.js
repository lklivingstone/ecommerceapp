const jwt= require("jsonwebtoken")
require("dotenv/config")

const verifyToken= (req, res, next) => {
    const authHeader= req.headers.token

    if (authHeader) {
        const authToken= authHeader.split(" ")[1]
        jwt.verify(authToken, process.env.JWT_KEY, (err, user) => {
            if (err) {
                res.status(403).json("Invalid Token")
            }
            else {
                req.user= user
                next()
            }
        })
    }
    else {
        return res.status(401).json("You are not authenticated")
    }
}

const verifyTokenAndAuthorization= (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }
        else {
            res.status(403).json("You are not Authorized!!")
        }
    })
    
}

const verifyTokenForAdmin= (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        }
        else {
            res.status(403).json("You are not Authorized")
        }
    })
}

module.exports= { verifyToken, verifyTokenAndAuthorization, verifyTokenForAdmin }