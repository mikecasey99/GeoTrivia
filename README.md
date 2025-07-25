# GeoTrivia 🌍

A geography-based trivia game with a React front‑end and FastAPI back‑end.

---

## 🚀 Overview
Builds an interactive trivia quiz where users answer geography questions, powered by map cursors and real-time backend logic.

- **Front‑end**: React + JSX + custom cursor controls  
- **Back‑end**: FastAPI API (tutorial-derived), powered by Python  
- **Data flow**: Front‑end retrieves questions and submits answers via HTTP endpoints  
- (Docker support planned — not yet implemented.)

---

## 🛠 Features
- Display trivia questions from the FastAPI backend
- Clickable cursor-based UI for selecting map-based answers
- Real-time answer validation and scoring
- Thin React component structure using `useState`, props, effects

---


### 1. Backend (FastAPI)
```bash
cd backend
# install dependencies
pip install fastapi uvicorn pydantic
# start server
uvicorn main:app --reload


### 2. Front-end (React)
cd frontend
npm install
npm start
