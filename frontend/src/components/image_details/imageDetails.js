import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ImageDetails = () => {
	const { id } = useParams()
	const image = useSelector(_image => _image.reducers.image.filter(e => e._id === id))[0]
	
	return(
		<></>
	)
}

export default ImageDetails