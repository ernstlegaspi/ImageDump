import { GET_IMAGES } from '../constants/constants.js'

const image = (images = [], action) => {
	switch(action.type) {
		case GET_IMAGES:
			return action.payload
		default: return images
	}
}

export default image