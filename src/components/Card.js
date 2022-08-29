
const Card = ({item}) => {
	const formatDate = (createdAt) => {
		const d = new Date(createdAt);
		const year = d.getFullYear();
		const month = d.getMonth() + 1;
		const date = d.getDate();
		return `${year}. ${month}. ${date}.`
	}
	
	return(
		<div className="col">
			<div className="card h-100">
				<img className="card-img-top card-photo" src={item?.links[0]?.href}  alt="nasa"/>
					<div className="card-body">
						<h5 className="card-title">{item?.data[0]?.title}</h5>
							<p className="card-text">
										{formatDate(item?.data[0]?.date_created)}</p>
							<p className="card-text description">{item?.data[0]?.description}</p>
					</div>
			</div>
		</div>
	)
}
export default Card;