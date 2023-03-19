import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { destroyCart } from "../store/actions/actionCreator";

export default function PaymentModal() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const handleShow = (e) => {
		e.preventDefault();
		setShow(true);
	};

	const handlePayment = () => {
		dispatch(destroyCart());
		navigate("/");
	};
	return (
		<>
			<div className="center">
				<button className="BTN" type="submit" onClick={handleShow}>
					Confirm Payment
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
				<Modal.Header closeButton>
					<div className="Title-Name">Payment Method</div>
				</Modal.Header>
				<Modal.Footer>
					<div className="center">
						<button className="BTN" type="submit" onClick={handlePayment}>
							Complete Payment
						</button>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
}
