# main.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from logic import get_gemini_response

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Gemini Chatbot Backend Running"}

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    prompt = data.get("message", "")
    response = get_gemini_response(prompt)
    return {"response": response}
