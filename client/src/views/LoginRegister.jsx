import { Container, Col, Row, Tab, Tabs, Card, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register } from "../store/actions/actionCreator";

export default function LoginRegister() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [key, setKey] = useState("login");
	const [formRegister, setFormRegister] = useState({
		email: "",
		password: "",
	});
	const handleFormRegister = (e) => {
		const { value, name } = e.target;
		setFormRegister({
			...formRegister,
			[name]: value,
		});
	};
	const submitRegisterHandler = (e) => {
		e.preventDefault();
		dispatch(register(formRegister));
		setFormRegister({
			email: "",
			password: "",
		});
		setFormLogin({
			email: "",
			password: "",
		});
		setKey("login");
	};
	const [formLogin, setFormLogin] = useState({
		email: "",
		password: "",
	});
	const handleFormLogin = (e) => {
		const { value, name } = e.target;
		setFormLogin({
			...formLogin,
			[name]: value,
		});
	};
	const submitLoginHandler = (e) => {
		e.preventDefault();
		dispatch(login(formLogin));
		navigate("/");
	};
	return (
		<>
			<Container fluid>
				<Row>
					<Col lg={4}></Col>
					<Col lg={4} className="login-register">
						<Row>
							<Card className="card-login">
								<Tabs
									activeKey={key}
									onSelect={(k) => setKey(k)}
									id="justify-tab-example"
									className="mb-3"
									justify
								>
									<Tab eventKey="login" title="Login" className="tab-login">
										<Row xs={12} md={12} lg={12} className="g-3">
											<Form onSubmit={submitLoginHandler}>
												<Form.Group className="mb-3">
													<Form.Label>Email address</Form.Label>
													<Form.Control
														name="email"
														type="email"
														placeholder="Enter email ..."
														value={formLogin.email}
														onChange={handleFormLogin}
													/>
												</Form.Group>

												<Form.Group className="mb-3">
													<Form.Label>Password</Form.Label>
													<Form.Control
														name="password"
														type="password"
														placeholder="Enter password ..."
														value={formLogin.password}
														onChange={handleFormLogin}
													/>
												</Form.Group>

												<br></br>
												<div className="center">
													<button className="BTN-login-register" type="submit">
														Login
													</button>
												</div>
											</Form>
										</Row>
									</Tab>
									<Tab
										eventKey="register"
										title="Register"
										className="tab-login"
									>
										<Row xs={12} md={12} lg={12} className="g-3">
											<Form onSubmit={submitRegisterHandler}>
												<Form.Group className="mb-3">
													<Form.Label>Email address</Form.Label>
													<Form.Control
														name="email"
														placeholder="Enter email ..."
														value={formRegister.email}
														onChange={handleFormRegister}
													/>
												</Form.Group>

												<Form.Group className="mb-3">
													<Form.Label>Password</Form.Label>
													<Form.Control
														name="password"
														type="password"
														placeholder="Enter password ..."
														value={formRegister.password}
														onChange={handleFormRegister}
													/>
												</Form.Group>

												<br></br>
												<div className="center">
													<button className="BTN-login-register" type="submit">
														Register
													</button>
												</div>
											</Form>
										</Row>
									</Tab>
								</Tabs>
							</Card>
						</Row>
					</Col>
					<Col lg={4}></Col>
				</Row>
			</Container>
		</>
	);
}
