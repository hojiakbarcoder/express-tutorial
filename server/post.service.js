import postModel from '../models/app.model.js'

class PostService {
	async create(post) {
		const newPost = await postModel.create(post)
		return newPost
	}
	async getAll() {
		const allPosts = await postModel.find()
		return allPosts
	}
}

const postService = new PostService()

export default postService
