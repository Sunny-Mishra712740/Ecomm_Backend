// This will be a starting file of the project

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");
const { error } = require("console");
const user_model = require("./models/user.model");
const bcrypt = require("bcryptjs");


app.use(express.json()); // Convert json to js object
app.use(express.urlencoded({ extended: true })); // for form data


// Connection with MongoDB

mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to the MongoDB", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
  init();
});

// Create an admin user at the starting of the application, If not already present

async function init() {
  try {
    let user = await user_model.findOne({ userId: "Admin" });

    if (user) {
      console.log("Admin is already present");
      return;
    }
  } catch (error) {
    console.log("Error while reading the data", error);
  }

  try {
    user = await user_model.create({
      name: "Sunny",
      userId: "Admin",
      email: "sunnymishra@gmail.com",
      userType: "ADMIN",
      password: bcrypt.hashSync("Sunny1", 8),
    });
    console.log("Admin Created", user);
  } catch (error) {
    console.log("Error while creating Admin", error);
  }
}

// Stich the route to the server

require("./routes/auth.route")(app);  // Call rotues and passing app Object

// Start the server

app.listen(server_config.PORT, () => {
  console.log(`Server is listening to PORT : ${server_config.PORT}`);
});
