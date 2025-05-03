import express from 'express'
import postController from '../controllers/post.controller.js'
export const router = express.Router()

router.get('/', postController.getAll)
router.post('/', postController.create)
router.delete('/delete/:id', postController.delete)

export default router
