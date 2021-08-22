import express, { response } from 'express';
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js';
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors());
connectDB()

const port = process.env.PORT || 5000
console.log(`port: ${process.env.PORT}`);

app.get('/', (req, res) => {
  res.send('Yeah server working!')
})

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : response.statusCode
  res.status(statusCode)
  res.json({
    message: error.message,
    stack : process.env.NODE_ENV === 'production' ? null : error.stack
  })
})

app.use('/api/products', productRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})