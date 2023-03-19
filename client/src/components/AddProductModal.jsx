import { Form, Modal, Row, Col, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/actions/actionCreator";

export default function AddProductModal() {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [formProduct, setFormProduct] = useState({
		name: "",
		description: "",
		quantity: 0,
		price: 0,
		image: "",
	});
	const handleFormProduct = (e) => {
		const { value, name } = e.target;
		setFormProduct({
			...formProduct,
			[name]: value,
		});
	};

	const handleClose = () => {
		setShow(false);
	};

	const handleShow = (e) => {
		e.preventDefault();
		setShow(true);
	};

	const submitAddProductHandler = (e) => {
		e.preventDefault();
		dispatch(createProduct(formProduct));
		setShow(false);
		setFormProduct("");
	};
	return (
		<>
			<div className="center">
				<button className="BTN" type="submit" onClick={handleShow}>
					+ Create New Product
				</button>
			</div>
			<Modal
				show={show}
				onHide={handleClose}
				animation={false}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Form onSubmit={submitAddProductHandler} className="modal-container">
					<Modal.Header closeButton>
						<div className="Title-Name">Create New Product</div>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Form.Group className="mb-3">
								<Form.Label className="text-center">Product Name</Form.Label>

								<Form.Control
									type="text"
									className="form-control"
									name="name"
									placeholder="Enter product name ..."
									value={formProduct.name}
									onChange={handleFormProduct}
								/>
							</Form.Group>
						</Row>

						<Row>
							<Form.Group className="mb-3">
								<Form.Label className="text-center">
									Product Description
								</Form.Label>

								<Form.Control
									type="text"
									className="form-control"
									name="description"
									placeholder="Enter product description ..."
									value={formProduct.description}
									onChange={handleFormProduct}
								/>
							</Form.Group>
						</Row>

						<Row>
							<Col lg={4}>
								<Form.Group className="mb-3">
									<Form.Label className="text-center">Quantity</Form.Label>

									<Form.Control
										type="number"
										className="form-control"
										name="quantity"
										placeholder="Input quantity ..."
										value={formProduct.quantity}
										onChange={handleFormProduct}
									/>
								</Form.Group>
							</Col>

							<Col lg={8}>
								<Form.Group className="mb-3">
									<Form.Label>Price / Unit</Form.Label>

									<InputGroup className="mb-3">
										<InputGroup.Text>Rp</InputGroup.Text>
										<Form.Control
											type="text"
											className="form-control"
											name="price"
											placeholder="Enter price ..."
											value={formProduct.price}
											onChange={handleFormProduct}
										/>
										<InputGroup.Text>.00</InputGroup.Text>
									</InputGroup>
								</Form.Group>
							</Col>
						</Row>

						<Row>
							<Form.Group className="mb-3">
								<Form.Label className="text-center">Product Image</Form.Label>

								<Form.Control
									type="text"
									className="form-control"
									name="image"
									placeholder="Enter product image ..."
									value={formProduct.image}
									onChange={handleFormProduct}
								/>
							</Form.Group>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<div className="center">
							<button className="BTN" type="submit">
								+ Create New Product
							</button>
						</div>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
}
