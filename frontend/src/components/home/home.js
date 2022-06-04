import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Images from '../images/images'
import { getImages } from '../../actions/action'

const Home = () => {
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(getImages())
	}, [dispatch])
	
	return(
		<></>
	)
}

export default Home