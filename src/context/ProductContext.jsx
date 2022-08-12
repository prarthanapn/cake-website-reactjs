import { createContext, useState, useContext } from 'react'
const ProductContext = createContext()

// eslint-disable-next-line react/prop-types
export const ProdcutContextProvider = ({ children }) => {
	const [products, setproducts] = useState([])
	const [cart, setcart] = useState({
		products: [],
		setProducts: (data) => {
			setcart(({ setProducts, Price, setPrice, Items, setItems }) => {
				return {
					products: data,
					setProducts,
					Price,
					setPrice,
					Items,
					setItems

				}
			})
		},
		Price: 0,
		setPrice: (data) => {
			setcart(({ products, setProducts, setPrice, Items, setItems }) => {
				return {
					products,
					setProducts,
					Price: data,
					setPrice,
					Items,
					setItems
				}
			})
		},
		Items: 0,
		setItems: (data) => {
			setcart(({ products, setProducts, Price, setPrice, Items, setItems }) => {
				return {
					products,
					setProducts,
					Price,
					setPrice,
					Items: data,
					setItems
				}
			})
		}

	})
	return (
		<ProductContext.Provider value={{ products, setproducts, cart, setcart }}>
			{children}
		</ProductContext.Provider>
	)
}

export const ProductConextConsumer = () => {
	const { products, setproducts, cart, setcart } = useContext(ProductContext)
	return { products, setproducts, cart, setcart }
}
