import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Images = () => {
	const image = useSelector(images => images.reducers)

	useEffect(() => {
		console.log(image)
	})
	
	return(
		<>
		</>
	)
}

export default Images