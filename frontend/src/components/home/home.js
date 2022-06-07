import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Search } from '@material-ui/icons'

import Images from '../images/images'
import { getImages } from '../../actions/action'

import './css/home.css'

const Home = () => {
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(getImages())
	}, [dispatch])
	
	return(
		<div className="home">
			<div className="home-header">
				<div className="home-nav">
					<h1><a href="/">ImageDump</a></h1>
					<p><a href="/login">Login</a></p>
				</div>
				<div className="home-center-content">
					<p>The best free stock photos, royalty free images & videos shared by creators.</p>
					<div className="home-search">
						<input type="text" id="home-searchbar" placeholder="Search for free photos & videos" />
						<div className="home-search-button">
							<Search className="home-search-icon" />
						</div>
					</div>
				</div>
			</div>
			<Images />
		</div>
	)
}

export default Home