import './App.css'
import React, { useState, useEffect } from 'react'
import { Navbar } from './components/High/Navbar/Navbar'
import { Banner } from './components/High/Banner/Banner'
import { About } from './components/High/About/About'
import { Store } from './components/High/Store/Store'
import { Detailed } from './components/High/Detailed/Detailed'
import { Order } from './components/High/Order/Order'
import { Footer } from './components/High/Footer/Footer'
import { ProductConextConsumer } from './context/ProductContext'
import { Loader } from './components/Low/styled/Loader/Loader'

function Home () {
	const [loader, setLoader] = useState(true)
	const { setproducts } = ProductConextConsumer()
	useEffect(() => {
		const data = async () => {
			const res = await fetch('data.json')
			const temp = await res.json()
			setproducts(temp)
			setLoader(false)
		}
		data()
	}, [loader])

	return (
		loader
			? <Loader />
			: <>
				<Navbar />
				<Banner />
				<About />
				<Store />
				<Detailed />
				<Order />
				<Footer />
			</>
	)
}

export default Home
