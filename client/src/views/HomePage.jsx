import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/actionCreator";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => {
		return state.products;
	});
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	return (
		<>
			<Container className="home-content">
				{products.length < 1 ? (
					<div className="no-product-list">
						<Row>
							<div className="Title-Name">No product has been added...</div>
						</Row>
					</div>
				) : (
					<div className="yes-product-list">
						<Row>
							{products.map((product, idx) => {
								return <ProductCard product={product} key={idx} />;
							})}
						</Row>
					</div>
				)}
			</Container>
		</>
	);
}
