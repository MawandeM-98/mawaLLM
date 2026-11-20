import ollama

from app.config import OLLAMA_MODEL, OLLAMA_HOST


client = ollama.Client(host=OLLAMA_HOST)


def generate_response(message: str) -> str:

    response = client.chat(
        model=OLLAMA_MODEL,
        messages=[
            {
                "role": "user",
                "content": message
            }
        ]
    )

    return response["message"]["content"]