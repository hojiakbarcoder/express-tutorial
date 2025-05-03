import postModel from '../models/app.model.js'
import fileService from './file.service.js'

class PostService {
	async create(post, picture) {
		const fileName = fileService.save(picture)
		const newPost = await postModel.create({ ...post, picture: fileName })
		return newPost
	}
	async getAll() {
		const allPosts = await postModel.find()
		return allPosts
	}
	async delete(id) {
		const post = await postModel.findByIdAndDelete(id)
		return post
	}
}

const postService = new PostService()

export default postService
