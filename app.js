import dotenv from 'dotenv'
import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import router from './routes/post.route.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))

// Routes
app.use('/api/post', router)

// app.get('/', async (req, res) => {
// 	try {
// 		const allPosts = await postModel.find()
// 		res.status(200).json(allPosts)
// 	} catch (error) {
// 		res.status(500).json(error)
// 	}
// 	res.status(200).json({ message: 'hello world' })
// })
// app.post('/', async (req, res) => {
// 	try {
// 		const { title, body } = req.body
// 		const newPost = await postModel.create({ title, body })
// 		res.status(201).json(newPost)
// 	} catch (error) {
// 		res.status(500).json(error)
// 	}
// })

// app.delete('/:id', (req, res) => {
// 	const { id } = req.params
// 	res.send(id)
// })

const db_url = process.env.DB_URL
const bootstrap = async () => {
	try {
		await mongoose.connect(db_url).then(() => console.log('Connected DB'))
		app.listen(port, () =>
			console.log(`Example app listening on port - http://localhost:${port}`)
		)
	} catch (error) {
		console.log(`Connection error with DB: ${error}`)
	}
}

bootstrap()
