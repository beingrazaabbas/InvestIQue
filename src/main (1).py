from fastapi import FastAPI
import pandas as pd

app = FastAPI()

df = pd.read_csv('./dataset/results.csv', header=None)
recommended_stocks = df[0].tolist()

@app.get("/get_recommended")
async def read_list():
    return recommended_stocks
