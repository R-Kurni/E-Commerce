import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
	const navigate = useNavigate();
	return (
		<>
			<Container>
				<div className="not-found">
					<Row>
						<img
							src="https://gifimage.net/wp-content/uploads/2017/09/404-gif-11.gif"
							style={{ cursor: "pointer" }}
							onClick={() => {
								navigate("/");
							}}
						/>
					</Row>
				</div>
			</Container>
		</>
	);
}
