from fastapi import APIRouter
from pydantic import BaseModel

from app.services.ai_service import generate_response

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):

    answer = generate_response(request.message)

    return {
        "response": answer
    }