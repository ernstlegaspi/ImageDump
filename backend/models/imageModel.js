import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({
	description: String,
	image: String,
	createdAt: {
		type: Date,
		default: new Date()
	},
	title: String,
	author: String
})

export default mongoose.model("Image Dump", imageSchema)