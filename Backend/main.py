from fastapi import FastAPI, Request, HTTPException
import json
import random
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://yourdomain.com"  # Replace with your actual domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=[],
)

@app.get("/questions")
def get_questions(request: Request):
    origin = request.headers.get("origin", "")
    if origin not in ALLOWED_ORIGINS:
        raise HTTPException(status_code=403, detail="Forbidden")

    with open("questions.json", "r", encoding="utf-8") as f:
        questions = json.load(f)
        return random.choice(questions)
