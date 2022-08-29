import { Link } from "react-router-dom";
const NotFound = () => {
	return(
		<div><h1>
			Sorry, Page Not Found.
			<Link to="/">Go back </Link>
			</h1></div>
	)
}
export default NotFound;