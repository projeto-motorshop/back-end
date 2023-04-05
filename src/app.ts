import cors from 'cors'
import 'dotenv/config'
import express from "express"
import "express-async-errors"
import "reflect-metadata"
import handleError from './errors/handleError'

const app = express()
app.use(cors())
app.use(express.json())
app.use(handleError)



export default app