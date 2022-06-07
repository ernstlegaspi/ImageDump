import express from 'express'

import { getImage, getImages, postImage } from '../controllers/imageController.js'

const router = express.Router()

router.get(`/`, getImages)
router.get(`/:id`, getImage)
router.post(`/`, postImage)

export default router