Humble Superhero API

This project consists of a NestJS backend and a React frontend to manage superheroes.

📂 Project Structure

/superheroes
├── humble-superhero-api # Backend
├── humble-superhero-frontend # Frontend

🚀 Getting Started

1️⃣ Backend Setup (NestJS)

Install dependencies

cd humble-superhero-api
npm install

Run the backend server

npm run start

By default, the backend runs on http://localhost:8080

2️⃣ Frontend Setup (React)

Install dependencies

cd ../humble-superhero-frontend
npm install

Configure API URL

Create a .env file in the humble-superhero-frontend folder:

REACT_APP_API_BASE_URL=http://localhost:8080

Run the frontend

npm start

By default, the frontend runs on http://localhost:3000

🛠 Features

Add superheroes with their name, superpower, and humility score.

View a list of superheroes, sorted by humility score.

Backend built with NestJS.

Frontend built with React.

🔗 API Endpoints

POST /superheroes

Body: { name, superpower, humility }

Adds a new superhero.

GET /superheroes

Returns superheroes sorted by humility score.

🤝 Collaboration & Improvements

If working with a team:

Use GitHub issues for feature tracking.

Write clear commit messages.

Follow code reviews before merging changes.

⏳ If I Had More Time...

Add a database instead of in-memory storage.

Implement authentication.

Deploy the project on Vercel & Railway.
