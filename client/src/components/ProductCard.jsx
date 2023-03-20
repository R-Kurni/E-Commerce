import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/actionCreator";

export default function ProductCard({ product }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleCart = () => {
		dispatch(addToCart({ product }));
		navigate("/");
	};
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};
	return (
		<>
			<Col className="col-3">
				<Card>
					<Card.Img variant="top" className="card-image" src={product?.image} />
					<Card.Body>
						<Card.Title className="text-truncate">{product?.name}</Card.Title>
						<Card.Text className="text-truncate">
							{product?.description}
						</Card.Text>
						<Card.Text className="card-price">
							{rupiah(product?.price)}
						</Card.Text>
						<div className="add-to-cart-btn" onClick={handleCart}>
							Add to Cart
						</div>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}
