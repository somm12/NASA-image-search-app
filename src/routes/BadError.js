import { Link } from "react-router-dom";

const BadError = ({ text }) => {
	return ( 
		<main>
			<h1>{text}</h1>
			<Link to="/">다시 돌아가기</Link>
		</main>
	)
	
}
export default BadError;