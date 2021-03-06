import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './css/app.css'

const Home = lazy(() => import(`./components/home/home.js`))
const Form = lazy(() => import(`./components/form/form.js`))
const ImageDetails = lazy(() => import(`./components/image_details/imageDetails.js`))

const App = () => {
	return(
		<div className="app-max-width">
			<BrowserRouter>
				<Suspense fallback={<div />}>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/form/" exact element={<Form />} />
						<Route path="/image/:id" exact element={<ImageDetails />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App