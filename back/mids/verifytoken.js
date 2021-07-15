import {verify} from "jsonwebtoken";



export function authy(req, res, next) {
    const authToken = req.res.token;

    if (!authToken) {
        res.status(401).json({ "message": "algo nao esta certo" })
    }

    const [, token] = authtoken.split("");

    try {
        verify(token, "senha");
        return next();
    }catch(err){
        return res.status(401).json(err)
    }
}


