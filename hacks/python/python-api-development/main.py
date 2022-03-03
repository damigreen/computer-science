from fastapi import FastAPI
from fastapi.params import Body;

app = FastAPI()

# path operations // route


@app.get("/")  # decorator
async def root():  # function
    return {"message": "Hello world"}


@app.get("/get_user")
async def get_user():
    return {"user": "damilola"}


@app.get("/posts")
async def get_post():
    return {"message": "here is your posts"}


@app.post("/create-posts")
async def create_post(payLoad: dict = Body(...)):
    print(payLoad)
    return {"message": "Post successfully sent"}
