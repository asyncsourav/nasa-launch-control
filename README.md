



# NASA Mission Control

A full-stack web application for managing interstellar space mission launches. Built with Node.js, Express, MongoDB, and React.

## Overview

NASA Mission Control allows users to schedule, track, and manage space launches to habitable exoplanets. The application processes real Kepler mission data to identify habitable planets and provides an intuitive interface for mission planning.

## Features

### Backend
- RESTful API with Express.js
- MongoDB database with Mongoose ODM
- CSV data processing and filtering
- Automatic flight number assignment
- Input validation and error handling
- CORS configuration for cross-origin requests

### Frontend
- React-based SPA with client-side routing
- Sci-fi themed UI with Arwes library
- Real-time data synchronization
- Form validation and user feedback
- Loading states and error handling
- Sound effects for enhanced UX
- Responsive design for all devices

## 🛠 Tech Stack

**Backend:** Node.js, Express.js, MongoDB, Mongoose, csv-parse, cors  
**Frontend:** React 17, React Router, Arwes UI, Custom Hooks

## roject Structure

```
Part_09_NASA_Project/
├── server/                      # Backend API
│   ├── src/
│   │   ├── server.js           # Entry point, HTTP server setup
│   │   ├── app.js              # Express app configuration
│   │   ├── models/             # Data models & business logic
│   │   │   ├── planets.model.js
│   │   │   ├── planets.mongo.js
│   │   │   ├── launches.model.js
│   │   │   └── launches.mongo.js
│   │   └── routes/             # API routes & controllers
│   │       ├── planets/
│   │       └── launches/
│   ├── data/
│   │   └── kepler_data.csv     # NASA Kepler exoplanet data
│   └── public/                 # Built React app (generated)
│
├── client/                      # Frontend React app
│   ├── src/
│   │   ├── index.js            # React entry point
│   │   ├── App.js              # Root component
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom React hooks
│   │   └── settings.js         # Theme & sound config
│   └── public/                 # Static assets
│
└── package.json                # Root package config
```

## Architecture

```
┌─────────────────┐
│   React Client  │  Port 3000
│   (Frontend)    │
└────────┬────────┘
         │ HTTP/REST
         │
┌────────▼────────┐
│  Express Server │  Port 8000
│    (Backend)    │
└────────┬────────┘
         │
┌────────▼────────┐
│    MongoDB      │
│   (Database)    │
└─────────────────┘
```

The application follows MVC architecture with clear separation of concerns between models, controllers, and routes.

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn package manager
- MongoDB Atlas account (free tier works) or local MongoDB instance

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Part_09_NASA_Project
```

2. **Install dependencies**
```bash
npm install
```
This installs dependencies for both frontend and backend automatically.

3. **Set up environment variables**

   **IMPORTANT:** You must create `.env` files before starting the application!

   **Server Setup:**
   - Navigate to the `server` directory
   - Create a `.env` file with the following content:
   ```env
   PORT=8000
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database
   NODE_ENV=development
   CLIENT_URL=http://localhost:3000
   ```
   - Replace `MONGO_URL` with your actual MongoDB connection string

   **Client Setup:**
   - Navigate to the `client` directory
   - Create a `.env` file with the following content:
   ```env
   REACT_APP_API_URL=http://localhost:8000
   ```

   **For detailed setup instructions, see [ENV_SETUP.md](./ENV_SETUP.md)**

4. **Start the application**

**Development mode (recommended):**
```bash
npm run watch
```

This starts both servers concurrently:
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:3000`

**Or start separately:**
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend  
npm run client
```

## PI Endpoints

### Planets
- `GET /planets` - Get all habitable planets

### Launches
- `GET /launches` - Get all launches (upcoming and past)
- `POST /launches` - Create a new launch
  ```json
  {
    "mission": "Mission Name",
    "rocket": "Rocket Type",
    "launchDate": "2024-12-31",
    "target": "Kepler-442 b"
  }
  ```
- `DELETE /launches/:id` - Abort a launch by flight number

See [server/README.md](./server/README.md) for detailed API documentation.

## Habitable Planet Criteria

The application filters planets based on scientific criteria:

1. **Status**: Must be CONFIRMED (not false positive or candidate)
2. **Stellar Flux**: Between 0.36 and 1.11 (Earth-like energy)
3. **Planetary Radius**: Less than 1.6 × Earth's radius

These criteria ensure only potentially habitable planets are available for mission planning.

## 📚 Documentation

- [Backend API](./server/README.md) - Detailed API documentation
- [Frontend](./client/README.md) - Frontend component documentation


---

**Built for space exploration** 🚀
