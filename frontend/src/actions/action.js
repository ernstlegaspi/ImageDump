import * as api from '../api/api'

import { GET_IMAGES } from "../constants/constants";

export const getImages = () => async dispatch => {
	try {
		const { data } = await api.getImages()

		dispatch({ type: GET_IMAGES, payload: data })
	}
	catch(e) {
		console.log(`GET IMAGES: ${e}`)
	}
}