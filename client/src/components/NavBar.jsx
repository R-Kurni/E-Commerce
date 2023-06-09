import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function NavBar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => {
		return state.user;
	});
	const handleLogout = () => {
		localStorage.clear();
		navigate("/");
	};
	useEffect(() => {}, [user]);
	return (
		<>
			<Navbar className="NavBar-BG" sticky="top">
				<Container className="NavBar">
					<div>
						<Link to="/" className="nav-link">
							<b className="nav-text">E-COMMERCE</b>
						</Link>
					</div>
					{!localStorage.access_token ? (
						<div>
							<Nav>
								<Link to="/login" className="nav-link">
									<div className="nav-text">Login</div>
								</Link>
							</Nav>
						</div>
					) : (
						<div>
							<Nav
								style={{
									gap: "50px",
									alignItems: "center",
								}}
							>
								<Link to="/cart" className="nav-link">
									<div className="nav-text">My Cart</div>
								</Link>
								<Link to="/store" className="nav-link">
									<div className="nav-text">My Store</div>
								</Link>
								<Link to="/" className="nav-link" onClick={handleLogout}>
									<div className="nav-text">Logout</div>
								</Link>
							</Nav>
						</div>
					)}
				</Container>
			</Navbar>
		</>
	);
}
