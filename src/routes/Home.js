import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "../components/Card";
import NoResult from "../components/NoResult";
import Pagination from "../components/Pagination";
import BadError from "./BadError"



function Home(){
	
	
	const ERROR400 = "잘못된 요청입니다"
	const ERROR500 = "서버 요청에 실패했습니다"
	const BaseURL = "https://images-api.nasa.gov/search?media_type=image&q=";
	
	// items: 검색결과에 따른 결과물 data를 담음.
	// limit: 검색 결과물은 page당 10개씩 담음.
	// offset: API에서는 자동으로 100개씩 data를 가져옴.
	// 100개가 될 때까지는 offet은 0 , 10, 20 으로 업데이트가 되고 100개 이상이되면
	// page가 2로 업데이트가 되며, 다시 해당 페이지의 offset이 0부터 시작되어야함.
	// 100개가 될 때마다 0이 되어야함.
	const [loading, setLoading] = useState(true);
	const [searchWord, setSearchWord] = useState("");
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState([]);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const offset = ((page - 1) * limit) % 100;
	
	
	const [badError, setBadError] = useState(false);
	const [requestFail, setRequestFail] = useState(false);
	const [noResultMessage, setNoResultMessage] = useState("");
	

	const getItems  = async () => {
		//다시 돌아가기 했을 때 이전 상태가 남아있는 것을 피하기 위함.
		setLoading(true);
		// 초기 데이터는 seoul 검색 결과를 나타냄.
		// Client상 page가 11부터는 API 내에서는 page가 2가 됨 -> Math.ceil이용.
		let searchUrl = "";
		if (searchWord === null || searchWord === ""){
			searchUrl = BaseURL + 'seoul'+ "&page="+ Math.ceil(page/limit);
		}
		else {
			searchUrl = BaseURL + searchWord + "&page=" + Math.ceil(page/limit);
		}
	
		try {
			const response = await axios.get(searchUrl);
			console.log(response);
			// HTTP status code가 200 OK일때. items을 가져옴.
			// 총 개수를 의미하는 metadata total_hits를 가져옴.
			if (response.status === 200) {
				const { items }  = response?.data?.collection;
				const { metadata } = response?.data?.collection;
				// 만약 결과물 개수가 0일 때.
				// set no result message 
				if (items.length === 0){
					setNoResultMessage(`${searchWord} 에 대한 검색 결과가 없습니다.`)
				}
				// 검색 후 setItems을 통해 items 상태(검색 결과물) 업데이트.
				setItems(items);
				setTotal(metadata.total_hits);
			}
		} catch (err) {

			const { status } = err?.response;
			if (status >= 400) {
				//잘못된요청 400 or 404 처리.
				setBadError(true);
			} else if (status >= 500) {
				//서버 요청 실패
				setRequestFail(true);
			}
			
		} finally {
			// 에러가 나도, 검색 결과가 나와도 그 후 Loading 문구는 false.
			setLoading(false);
		}
	} 
	
	const onChangeSearch = (e) => {
		// 바뀐 검색어를 업데이트.
		setSearchWord(e.target.value);
	}
	
	const onSearch = (e) => {
		// 새로고침 막기.
		e.preventDefault();
		//검색어가 없을 경우 
		const word = document.querySelector("#input-text");
		setSearchWord(word.value);
		
		if (searchWord === null || searchWord === ""){
			getItems();
		}
		else{
			//검색구현
			
			
			getItems();
			// reset
			setBadError(false);
			setRequestFail(false);
			// Loading 중 이전 data들이 화면에 남아있음 -> setItems([]);
			setItems([]);
			setNoResultMessage("");
			setPage(1);
		}
	}
	// page가 바뀌었을 때 새로 렌더링.
	useEffect(() => {
		getItems();
	},[page])

	return (
		
		<main className="container">
			   <nav>
				   <form className="search-bar" onSubmit={e => onSearch(e)}>
					   <label for="input-text"></label>
						<input id="input-text" placeholder="검색어를 입력하세요" onChange={onChangeSearch} />
					   <button type="submit">검색</button>   
				   </form>
				   
			   </nav>
			   <section className="home-section">
				   
				   {!loading && noResultMessage && <NoResult text={noResultMessage} />}
				   {requestFail && <BadError text={ERROR500} />}
				   {badError && <BadError text={ERROR400} />}
				   {loading && <div className="loading"><h1>Loading . . .</h1></div>}
				   <div className="row row-cols-1 row-cols-md-4 g-4">
					   {items.slice(offset, offset + limit).map((item) => 
							<Card key={item?.data[0]?.nasa_id} item={item}/>
							)
					   	}
				   </div>
				   
				   <footer>
					   {items.length !== 0 &&
					   <Pagination 
						   total={total}
						   limit={limit}
						   page={page}
						   setPage={setPage}
						/>
						}
				   </footer>
				   
			   </section>
		   </main>

	);
}
export default Home;