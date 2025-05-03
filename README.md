
🛒 Local Mart – E-Commerce Web App

A responsive full-stack e-commerce platform with features like location-based fresh deals, user authentication, cart management, and product browsing.

 Folder Structure

 `client/` – React frontend (contains components & pages like Home, Products, Login)
 `server/` – Express backend (handles authentication, API routes, MongoDB connection)

---
 How to Run the Project Locally
 Prerequisites

Make sure you have the following installed:

1.Node.js (v14 or higher)
2.npm or yarn
3.MongoDB (local or Atlas URI)

---

 Setup Steps

 1. Clone the repository

```bash
git clone https://github.com/your-username/local-mart.git
cd local-mart
```

---

 2. Install dependencies

For client (React frontend):

```bash
cd client
npm install
```

For server (Express backend):

```bash
cd ../server
npm install
```

---

 3. Setup environment variables

Create a `.env` file in the `server` directory with the following:

```
MONGO_URI=mongodb+srv://safiafathima2004:dbsaf123@cluster0.wjykltm.mongodb.net/<YOUR_DATABASE_NAME>?retryWrites=true&w=majority
PORT=5000

```



---

4. Run the application

Start the backend server:

```bash
cd server
npm start
```

**Start the frontend:**

```bash
cd ../client
npm start
```

---

Access the App

Once both servers are running:
Frontend: [http://localhost:3000](http://localhost:3000)
Backend API: [http://localhost:5000](http://localhost:5000)

---

  Features

*  User Signup/Login
*  Location-based pricing in Fresh Deals
*  Add to Cart
*  Local Storage support
*  Navigation with React Router

---


