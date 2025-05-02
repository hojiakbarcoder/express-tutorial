import express from 'express'
import postController from '../controllers/post.controller.js'
export const router = express.Router()

router.get('/', postController.getAll)
router.post('/', postController.create)

export default router
