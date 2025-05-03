import postService from '../server/post.service.js'

class PostController {
	async getAll(req, res) {
		try {
			const allPosts = await postService.getAll()
			res.status(200).json(allPosts)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async create(req, res) {
		try {
			const post = await postService.create(req.body, req.files)
			res.status(201).json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async delete(req, res) {
		try {
			const post = await postService.delete(req.params.id)
			res.status(200).json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}
const postController = new PostController()

export default postController
