import { Container, Col, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCarts } from "../store/actions/actionCreator";
import CartListData from "../components/CartListData.jsx";
import PaymentModal from "../components/PaymentModal.jsx";

export default function CartPage() {
	const dispatch = useDispatch();
	const { carts } = useSelector((state) => {
		return state.carts;
	});
	useEffect(() => {
		dispatch(fetchCarts());
	}, []);
	return (
		<>
			<Container className="home-content">
				{carts.length < 1 ? (
					<div className="no-product">
						<Row>
							<div className="Title-Name">Your cart is still empty ...</div>
						</Row>
					</div>
				) : (
					<div className="yes-product">
						<Row className="width-100">
							<Col lg={3}></Col>
							<Col lg={6}>
								<div className="Title-Name">CART LIST</div>
							</Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="width-100">
							<Table bordered>
								<thead>
									<tr>
										<th className="col-1 text-center">No.</th>
										<th className="col-1 text-center">Image</th>
										<th className="col-2 text-center">Name</th>
										<th className="col-3 text-center">Description</th>
										<th className="col-1 text-center">Quantity</th>
										<th className="col-2 text-center">Price / Unit</th>
										<th className="col-2 text-center">Action</th>
									</tr>
								</thead>
								<tbody>
									{carts.map((cart, idx) => {
										return <CartListData cart={cart} idx={idx} key={idx} />;
									})}
								</tbody>
							</Table>
						</Row>
						<Row className="width-100 text-center">
							<PaymentModal />
						</Row>
					</div>
				)}
			</Container>
		</>
	);
}
