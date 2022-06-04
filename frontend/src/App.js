import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'app.css'

const Home = lazy(() => import(`./components/home/home.js`))

const App = () => {
	return(
		<div className="app-max-width">
			<BrowserRouter>
				<Suspense fallback={<div />}>
					<Routes>
						<Route path="/" exact element={<Home />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App