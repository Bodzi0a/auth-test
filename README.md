#  Authentication System

A simple yet secure authentication system built with Node.js, React, and MariaDB featuring JWT-based session management.

# Live Demo
Check out the live demo: http://bodzi0.it:3000

##  Screenshots

<img width="1909" alt="Login Page" src="https://github.com/user-attachments/assets/5881a9da-dabe-48d4-ab92-8e103d7dda7a" />

<img width="1919" alt="Register Page" src="https://github.com/user-attachments/assets/006c32eb-7715-4f3a-902c-5b5450f2702a" />

<img width="1920" alt="Welcome Page" src="https://github.com/user-attachments/assets/871cb4cf-81b4-4b1c-ba3a-fed9788ee503" />

##  Features

- **User Registration** - Create new accounts with email and password
- **User Login** - Secure authentication with JWT tokens
- **Session Management** - 30-minute token expiration with auto-logout
- **Password Security** - Bcrypt hashing for secure password storage
- **Input Validation** - Client-side and server-side validation
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Security** - Protection against SQL Injection, XSS, and CSRF attacks

##  Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MariaDB** - Database
- **JWT** - Token-based authentication
- **Bcrypt** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling

##  Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- MariaDB or MySQL
- npm or yarn

##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Bodzi0a/auth-test.git
cd auth
```

### 2. Backend Setup

#### Install Dependencies

```bash
cd backend
npm install
```

#### Configure Environment Variables

Create a `.env` file in the `backend/` folder:

```env
PORT=5000
NODE_ENV=development
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password_here
MYSQL_DATABASE=auth_system
JWT_SECRET=your_super_secret_key_change_in_production
JWT_EXPIRE=30m
FRONTEND_URL=http://localhost:3000
```

#### Create Database and Table

```sql
CREATE DATABASE auth_system;

USE auth_system;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

EXIT;
```

#### Start the Backend Server

```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

#### Install Dependencies

```bash
cd frontend
npm install
```

#### Configure Environment Variables

Create a `.env` file in the `frontend/` folder:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

#### Start the Frontend

```bash
npm start
```

The frontend will run on `http://localhost:3000`

### 4. Access the Application

1. Open your browser and navigate to `http://localhost:3000`
2. Click **"Register here"** to create a new account
3. Log in with your credentials
4. Enjoy your authenticated session!

## 📁 Project Structure

```
auth/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── .env
└── README.md
```

##  Security Features

- JWT-based authentication
- Password hashing with bcrypt
- HTTP-only cookies for token storage
- CORS configuration
- Helmet for security headers
- Input validation and sanitization
- Protection against common vulnerabilities

##  Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

##  License

This project is open source and available under the MIT License.

##  Author

**Bodzi0a**
- GitHub: [@Bodzi0a](https://github.com/Bodzi0a)

