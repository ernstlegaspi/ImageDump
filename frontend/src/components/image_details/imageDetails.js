import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Details from './details/details'
import { getImage } from '../../actions/action'

const ImageDetails = () => {
	const image = useSelector(img => img.reducers.image)
	const dispatch = useDispatch()

	const { id } = useParams()
	
	useEffect(() => {
		dispatch(getImage(id))
	}, [id, dispatch])
	
	return(<Details image={image} />)
}

export default ImageDetails