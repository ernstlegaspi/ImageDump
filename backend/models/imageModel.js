import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({
	description: String,
	title: String,
	author: String,
	image: String,
	createdAt: {
		type: Date,
		default: new Date()
	},
	tags: [String]
})

export default mongoose.model("Image Dump", imageSchema)