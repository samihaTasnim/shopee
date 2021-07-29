import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';

dotenv.config()
const app = express()
app.use(express.json())
connectDB()

const port = process.env.PORT || 5000
console.log(`port: ${process.env.PORT}`);

app.get('/', (req, res) => {
  res.send('Yeah server working!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})