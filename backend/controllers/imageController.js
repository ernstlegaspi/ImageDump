import ImageModel from '../models/imageModel.js'

export const getImage = async (req, res) => {
	try {
		const getDataImage = await ImageModel.find()
		
		res.status(200).json(getDataImage)
	}
	catch(e) {
		res.status(404).json({ message: e.message })
	}
}

export const postImage = async (req, res) => {
	try {
		const dataBody = req.body
		const postData = new ImageModel(dataBody)

		await postData.save()
		res.status(201).json(postData)
	}
	catch(e) {
		res.status(409).json({ message: e.message })
	}
}