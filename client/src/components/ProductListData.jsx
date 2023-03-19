import EditProductModal from "./EditProductModal";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions/actionCreator";

export default function ProductListData({ product, idx }) {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deleteProduct(product._id));
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
					<img className="store-image" src={product?.image}></img>
				</td>
				<td className="text-center">{product?.name}</td>
				<td className="text-center">{product?.description}</td>
				<td className="text-center">{product?.quantity}</td>
				<td className="text-center">{rupiah(product?.price)}</td>
				<td className="action-btn">
					<EditProductModal product={product} id={product?._id} />
					<div className="delete-btn" onClick={handleDelete}>
						Delete
					</div>
				</td>
			</tr>
		</>
	);
}
