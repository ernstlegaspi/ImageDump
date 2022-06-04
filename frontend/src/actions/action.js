import * as api from '../api/api'

import { GET_IMAGES, ADD_IMAGE } from "../constants/constants";

export const getImages = () => async dispatch => {
	try {
		const { data } = await api.getImages()

		dispatch({ type: GET_IMAGES, payload: data })
	}
	catch(e) {
		console.log(`GET IMAGES: ${e}`)
	}
}

export const addImage = imageData => async dispatch => {
	try {
		const { data } = await api.addImage(imageData)

		dispatch({ type: ADD_IMAGE, payload: data })
	}
	catch(e) {
		console.log(`ADD IMAGE: ${e}`)
	}
}