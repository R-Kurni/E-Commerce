import { Form, Modal, Row, Col, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store/actions/actionCreator";

export default function EditProductModal({ product, id }) {
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

	const submitEditProductHandler = (e) => {
		e.preventDefault();
		dispatch(updateProduct({ formProduct, id }));
		setShow(false);
		setFormProduct({
			name: "",
			description: "",
			quantity: 0,
			price: 0,
			image: "",
		});
	};
	useEffect(() => {
		if (product) {
			setFormProduct({
				name: product.name,
				description: product.description,
				quantity: product.quantity,
				price: product.price,
				image: product.image,
			});
		}
	}, [product]);
	return (
		<>
			<div className="edit-btn" type="submit" onClick={handleShow}>
				Edit
			</div>
			<Modal
				show={show}
				onHide={handleClose}
				animation={false}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Form onSubmit={submitEditProductHandler} className="modal-container">
					<Modal.Header closeButton>
						<div className="Title-Name">Edit Product</div>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Form.Group className="mb-3">
								<Form.Label>Product Name</Form.Label>

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
								<Form.Label>Product Description</Form.Label>

								<Form.Control
									as="textarea"
									rows={3}
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
									<Form.Label>Quantity</Form.Label>

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
								<Form.Label>Product Image</Form.Label>

								<Form.Control
									as="textarea"
									rows={2}
									className="form-control"
									name="image"
									placeholder="Input product image ..."
									value={formProduct.image}
									onChange={handleFormProduct}
								/>
							</Form.Group>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<div className="center">
							<button className="BTN" type="submit">
								Edit Product
							</button>
						</div>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
}
