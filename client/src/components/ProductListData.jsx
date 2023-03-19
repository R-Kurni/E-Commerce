export default function ProductListData({ product, idx }) {
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
				<td className="text-center">edit & delete</td>
			</tr>
		</>
	);
}
