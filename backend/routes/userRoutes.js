import User from "../models/UserSchema.js"
import express from "express"
import getToken from "./utils.js"
const router = express.Router()

router.post("/api/users/signin", async (req, res) => {
    // try {
        
        const signInUser = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        console.log(signInUser)
        const token = getToken(signInUser)
        if (signInUser) {
            res.send({
                _id: signInUser._id,
                name: signInUser.name,
                email: signInUser.email,
                isAdmin: signInUser.isAdmin,
                token: getToken(signInUser)
            })

            
        } else {
            res.status(405).send({ msg: "invalid email or password" })

        }
    // } catch (error) {
        
    // }



})
router.post("/api/users/register", async (req, res) => {
    // try {
        const newUser = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        const data = await newUser.save()
        console.log(data);
        
        if (data) {
            res.send({
                _id: data._id,
                name: data.name,
                email: data.email,
                isAdmin: data.isAdmin,
                token: getToken(data)
            })
            const token = getToken(newUser)
            // res.cookie('userInfo', token, { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 })
        } else {
            res.status(405).send({ msg: "invalid user details" })
        }
    // } catch (error) {
    //     res.status(405).send(error.reason)
    // }



})
router.get("/api/users/createAdmin", async (req, res) => {
    try {
        const admin = await new User({
            name: 'Lanre',
            email: "muhammedolanrewaju56@gmail.com",
            password: "habeeb2001",
            isAdmin: true
        })
        const Admin = await admin.save()
        res.send(Admin)
    } catch (e) {
        if (e) {
            res.send({ message: e.message })
        }
    }


})
export default router