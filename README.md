E-Commerce Backend

A simple backend for an e-commerce application built with Node.js, Express, MongoDB, JWT, and bcryptjs.
It includes user authentication, product management, and order handling APIs.

Features

User registration and login (JWT-based authentication)

Password hashing using bcryptjs

CRUD operations for products

Order creation and management

Middleware for authentication and error handling

MongoDB connection using Mongoose

Tech Stack

Node.js

Express.js

MongoDB (Mongoose)

bcryptjs

jsonwebtoken

Folder Structure
ecommerce-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   └── orderController.js
│
├── middlewares/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Order.js
│
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── server.js
└── package.json

Getting Started
1. Clone the repo
git clone https://github.com/Sunny-Mishra712740/ecommerce-backend.git
cd ecommerce-backend

2. Install dependencies
npm install

3. Setup environment variables

Create a .env file in the root folder and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Run the server
npm run dev


The server will run on http://localhost:5000

API Endpoints
Method	Route	Description	Auth
POST	/api/users/register	Register new user	❌
POST	/api/users/login	Login user and get token	❌
GET	/api/products	Get all products	❌
POST	/api/products	Add a new product	✅
POST	/api/orders	Place a new order	✅
Authentication

Passwords are hashed with bcryptjs before saving to the database.

On login, a JWT token is generated and sent back to the client.

Protected routes require a valid token in the header as:

Authorization: Bearer <token>

Scripts
Command	Description
npm start	Start the app
npm run dev	Start with nodemon (for development)
To-Do / Future Improvements

Add payment integration (Razorpay / Stripe)

Add image uploads for products

Add search and filters

Create admin-specific routes

Author

Sunny Mishra
GitHub
