🍽️ E-Restaurant — Full Stack Restaurant Website
A full-stack restaurant web application built with HTML, CSS, JavaScript, Node.js, PHP, and MySQL. Users can browse the menu, manage a cart, place orders, and register/login securely.

🚀 Features

Menu Browsing — Browse restaurant items with prices and descriptions
Cart System — Add/remove items, update quantities, view running total (persisted via localStorage)
Checkout Flow — Order summary with customer details form (name, email, address, phone)
User Authentication — Registration and login with bcrypt password hashing via Node.js
Database Integration — MySQL backend for user data storage using prepared statements
PHP Registration Pipeline — Alternative registration flow via PHP + MySQL (connect.php)
Responsive UI — Bootstrap + FontAwesome icons, custom CSS per page


🛠️ Tech Stack
LayerTechnologyFrontendHTML, CSS, Bootstrap, JavaScriptBackendNode.js, PHPDatabaseMySQLAuthbcrypt password hashingIconsFontAwesome 6

📁 Project Structure
tutor-main/
├── app.js              # Node.js backend — auth routes (register/login)
├── connect.php         # PHP registration pipeline
├── cart.html           # Cart page
├── cart.js             # Cart logic (localStorage)
├── cart.css            # Cart styles
├── checkout.html       # Checkout page
├── checkout.js         # Checkout + order form logic
├── checkout.css        # Checkout styles
├── bootstrap.css       # Bootstrap styles
└── css/                # FontAwesome icon assets

⚙️ Setup & Installation
Prerequisites

Node.js installed
MySQL server running
PHP server (XAMPP/WAMP or similar)

Steps

Clone the repository

bashgit clone https://github.com/YOURUSERNAME/e-restaurant.git
cd e-restaurant

Install Node dependencies

bashnpm install

Set up MySQL database


Create a database called test
Create a users table:

sqlCREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

Create a registration table for PHP flow:

sqlCREATE TABLE registration (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  gender VARCHAR(10),
  email VARCHAR(100),
  password VARCHAR(255),
  number BIGINT
);

Run the Node.js server

bashnode app.js

Open the frontend


Open index.html in your browser, or serve via a local server

👨‍💻 Built by
1st year Software Development students — P.Stuti Keerthana, Sambhav Das, Naresh, Aditya, Abhiram
