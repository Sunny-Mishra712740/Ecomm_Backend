// I need to write the controlle / logic to register a user

const bcrypt = require("bcryptjs");
const user_model = require("../models/user.model")

exports.signup = async (req, res) => {

    // Logic to Create the user

    // Read the request body

    const requsest_body = req.body; // In the form of JS Object


    // insert the data in the Users Collection in MongoDB

    const userObj = {
        name : requsest_body.name,
        userId : requsest_body.userId,
        email : requsest_body.email,
        userType : requsest_body.userType,
        password : bcrypt.hashSync(requsest_body.password, 8)
    }

    try {

        const user_created = await user_model.create(userObj)

        // Return this user

        const res_obj = {
            name : user_created.name,
            userId : user_created.userId,
            email : user_created.email,
            userType : user_created.userType,
            createdAt : user_created.createdAt,
            updatedAt : user_created.updatedAt
        }
        res.status(201).send(res_obj);


    } catch (error) {
       console.log("Error while registering the user", error)
       res.status(500).send({
        message : "Some error happened while registering the user"
       })
    }

    // Return response back to the user
}

exports.signin = (req, res) => {
    console.log("Hello")

}