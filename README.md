# Travel Itinerary Report App✈️

A full-stack travel itinerary manager app built with:
- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Express.js + MongoDB
- **Auth**: JWT-based

---

## 🧰 Features
- User Signup & Login
- Create, View, Edit, Delete itineraries
- Dashboard with basic trip stats
- Mobile responsive UI
- Docker & Docker Compose setup

---

## 🏁 Getting Started

### 🔧 Prerequisites
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### 🧪 Local Dev Setup
```bash
git clone https://github.com/your-username/tmtc-itinerary-app.git
cd tmtc-itinerary-app
docker-compose up --build
```

- Backend: [http://localhost:8080](http://localhost:8080)
- Frontend: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Auth API Endpoints

Base URL: `http://localhost:8080/api`

### POST /auth/signup
```bash
curl -X POST http://localhost:8080/api/auth/signup \
 -H 'Content-Type: application/json' \
 -d '{"email":"test@test.com","password":"123456"}'
```

### POST /auth/login
```bash
curl -X POST http://localhost:8080/api/auth/login \
 -H 'Content-Type: application/json' \
 -d '{"email":"test@test.com","password":"123456"}'
```

### GET /itineraries
```bash
curl -H "Authorization: Bearer <token>" http://localhost:8080/api/itineraries
```

---

## 📦 Build for Production
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm start
```

---

## 📂 Postman
Import the `postman_collection.json` to test all endpoints.

---

## 📸 Screenshots
Add screenshots of login, dashboard, calendar, etc. if available.

---

## 📃 License
MIT
```

## postman_collection.json
```json
{
  "info": {
    "_postman_id": "tmtc-travel-app",
    "name": "Travel Itinerary App",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Signup",
      "request": {
        "method": "POST",
        "header": [{ "key": "Content-Type", "value": "application/json" }],
        "body": {
          "mode": "raw",
          "raw": "{\"email\": \"test@test.com\", \"password\": \"123456\"}"
        },
        "url": {
          "raw": "http://localhost:8080/api/auth/signup",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8080",
          "path": ["api", "auth", "signup"]
        }
      }
    },
    {
      "name": "Login",
      "request": {
        "method": "POST",
        "header": [{ "key": "Content-Type", "value": "application/json" }],
        "body": {
          "mode": "raw",
          "raw": "{\"email\": \"test@test.com\", \"password\": \"123456\"}"
        },
        "url": {
          "raw": "http://localhost:8080/api/auth/login",
          "protocol": "http",
          "host": ["localhost"],
          "port": "8080",
          "path": ["api", "auth", "login"]
        }
      }
    }
  ]
}
