// POST : localhost:8888/ecommerce_db/api/v1/auth/signup
// I need to intercept this

const authController = require("../controllers/auth.controller")

module.exports = (app)=>{
    // If the app detected post call to this url handover this to authController
    app.post("/ecommerce_db/api/v1/auth/signup", authController.signup)
}