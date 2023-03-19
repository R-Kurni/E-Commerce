import { Container, Col, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserProducts } from "../store/actions/actionCreator";
import ProductListData from "../components/ProductListData";
import AddProductModal from "../components/AddProductModal";

export default function StorePage() {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => {
		return state.products;
	});
	useEffect(() => {
		dispatch(fetchUserProducts());
	}, []);
	return (
		<>
			<Container className="home-content">
				{products.length < 1 ? (
					<div className="no-product">
						<Row>
							<div className="Title-Name">
								You don't have product list yet, don't worry...
							</div>
						</Row>
						<Row>
							<AddProductModal />
						</Row>
					</div>
				) : (
					<div className="yes-product">
						<Row className="width-100">
							<Col lg={3}></Col>
							<Col lg={6}>
								<div className="Title-Name">PRODUCT LIST</div>
							</Col>
							<Col lg={3} className="add-btn">
								<Row>
									<AddProductModal />
								</Row>
							</Col>
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
									{products.map((product, idx) => {
										return (
											<ProductListData product={product} idx={idx} key={idx} />
										);
									})}
								</tbody>
							</Table>
						</Row>
					</div>
				)}
			</Container>
		</>
	);
}
