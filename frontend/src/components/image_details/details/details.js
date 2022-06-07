import React from 'react'
import Circle from '@material-ui/core/CircularProgress'
import Tooltip from '@mui/material/Tooltip'

import './css/details.css'

const Details = ({ image }) => {
	return(
		image.tags === undefined ? <Circle className="circular-progress" /> : <div className="details">
		<img src={image.image} loading="lazy" alt={image.title} />
		<div className="details-darkbg">
			<div className="details-details">
				<p>{image.title}</p>
				<p>{image.author}</p>
				<p><a href="/">{
					image.tags.map(tag => tag.split(`,`).map(tag_ => `#${tag_} `))
				}</a></p>
			</div>
			<div className="details-desc">
				<Tooltip title={image.description}>
					<div>
						<p>!</p>
					</div>
				</Tooltip>
			</div>
		</div>
	</div>
	)
}

export default Details