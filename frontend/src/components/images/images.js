import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './css/images.css'

const Images = () => {
	const image = useSelector(images => images.reducers.image)
	const navigate = useNavigate()

	const getImageId = (id) => {
		navigate(`/image/${id}`)
	}

	return(
		<div className="images">
			<ImageList variant="masonry" cols={3} gap={8} className="image-list">
				{
					image.map(_image => {
						return <ImageListItem onClick={() => getImageId(_image._id)} className="images-image" key={_image.image}>
							<img src={_image.image} loading="lazy" alt={_image.title} />
							<ImageListItemBar title={_image.title} />
						</ImageListItem>
					})
				}
			</ImageList>
		</div>
	)
}

export default Images