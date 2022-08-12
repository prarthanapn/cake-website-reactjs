import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Main'
import { ProdcutContextProvider } from './context/ProductContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ProdcutContextProvider>

		<Home />
	</ProdcutContextProvider>

)
