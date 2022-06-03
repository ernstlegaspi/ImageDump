import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import imageRouters from './routes/imageRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ limit: '40mb', extended: true }))

app.use(`/image`, imageRouters)

const PORT = 2217
const CONNECTION_URL = "mongodb+srv://imagedumpusername:imagedumppassword@cluster0.qki6i.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server is running in port ${PORT}`)))
	.catch(e => console.log(`Connection error...,`))