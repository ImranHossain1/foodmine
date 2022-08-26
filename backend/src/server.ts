import express from 'express';
import cors from 'cors';
import { sample_foods, sample_tags, sample_users } from './data';
import dotenv from 'dotenv';
dotenv.config()

import foodRouter from './routers/food.router'
import userRouter from './routers/user.router'
import { dbConnect } from './configs/database.config';
dbConnect();
const app = express();
const port = 5000;
app.use(express.json())
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

app.get('/', (req, res) => {
    res.send('Hello from Food Mine!')
  })
app.listen(port,()=>{
    console.log("Website served on http://localhost:"+ port);
})