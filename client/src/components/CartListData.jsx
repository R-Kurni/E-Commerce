import { useDispatch } from "react-redux";
import { deleteCart } from "../store/actions/actionCreator";

export default function CartListData({ cart, idx }) {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deleteCart(cart._id));
	};
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};
	return (
		<>
			<tr>
				<td className="text-center">{idx + 1}</td>
				<td className="text-center">
					<img className="store-image" src={cart?.image}></img>
				</td>
				<td className="text-center">{cart?.name}</td>
				<td className="text-center">{cart?.description}</td>
				<td className="text-center">{cart?.quantity}</td>
				<td className="text-center">{rupiah(cart?.price)}</td>
				<td className="action-btn">
					<div className="delete-btn" onClick={handleDelete}>
						Remove
					</div>
				</td>
			</tr>
		</>
	);
}
