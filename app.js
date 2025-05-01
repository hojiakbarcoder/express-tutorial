import express from 'express'

const app = express()
const port = 8080

app.use(express.json())

app.get('/', (req, res) => {
	res.status(200).json({ message: 'hello world' })
})
app.post('/', (req, res) => {
	const { firstName, lastName } = req.body
	const msg = `his fullname is - ${firstName} ${lastName}`

	res.send(msg)
})

app.delete('/:id', (req, res) => {
	const { id } = req.params
	res.send(id)
})

app.listen(port, () =>
	console.log(`Example app listening on port - http://localhost:${port}`)
)
