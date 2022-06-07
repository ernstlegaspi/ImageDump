import { GET_IMAGES, GET_IMAGE, ADD_IMAGE } from '../constants/constants.js'

const image = (images = [], action) => {
	switch(action.type) {
		case GET_IMAGES:
			return action.payload
		case GET_IMAGE:
			return action.payload
		case ADD_IMAGE:
			return [...images, action.payload]
		default: return images
	}
}

export default image