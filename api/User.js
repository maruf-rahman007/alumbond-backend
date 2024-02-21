const { Router } = require("express");
const router = Router();
const { nameSchema, emailSchema, passwordSchema } = require('../zod/User');
const User = require('../models/User')

// Password Hasing
const bcrypt = require('bcrypt')


router.post('/signin', (req, res) => {

})

router.post('/signup', async (req, res) => {
    try {
        const name = nameSchema.parse(req.body.name);
        const email = emailSchema.parse(req.body.email);
        const password = passwordSchema.parse(req.body.password);

        const isUserExist = await User.findOne({ email })

        if (isUserExist) {
            res.json({
                status: 404,
                message: "User with same email id alredy exist"
            })
        }
        else {
            // put data 
            // Hashing password
            const saltRounds = 10
            const hashedPassword = await bcrypt.hash(password,saltRounds)
            const newUser = await User.create({
                name,
                email,
                password: hashedPassword
            })
            res.json({
                status: "Success",
                message: "Account Created Successfully!",
                info: newUser
            })
        }
    } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.errors });
}
});


module.exports = router