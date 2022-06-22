import jwt, { decode } from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const getToken = (user) => {
   return jwt.sign({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
   }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" })
}



const isAuth = (req, res, next) => {
   const token = req.headers.authorization
   if (token) {
      const onlyToken = token.slice(7, token.length)
      jwt.verify(onlyToken, process.env.JWT_SECRET_KEY, (err, decode) => {
         if (err) return res.status(402).send({ msg: "invalid token" })
         req.user = token
         next()
         return
      })
   }
   return res.status(401).send({msg: "token is not supplied"})
}

const isAdmin = (req, res, next)=>{
   if(req.user && req.user.isAdmin){
      return next()
   }
   res.status(401).send({msg: 'Admin token is not valid'})
}
export default getToken