const Pagination = ({total, limit, page, setPage}) => {
	const numPages = Math.ceil(total / limit);//총 페이지수
	let displayPageCount = 10;
	//page를 10개 묶음 단위로 지정할 때, 시작하는 페이지 숫자 1, 11, 21,,
	// 첫 번째 page는 1, 11 이 되어야하는데, page - 1 안하면 10이 firstpage가 되버림.
	const firstPage = Math.floor((page - 1) / displayPageCount) * displayPageCount;
	
	if ((numPages - firstPage) < 10) {
		// 총 17p 일때, 마지막 10p 묶음에서 11 ~ 17 까지만 나타내야함. 현재 firstpage가 0, 10,20 형식이므로(원래는 1, 11, 21이 시작p)
		// 10개 단위로 페이지를 봤을 때 마지막 페이지 묶음의 첫 페이지수가 마지막 페이지 수와의 차이
		displayPageCount = numPages - firstPage;
	}
	
	return(
		<nav aria-label="Page navigation">
		  <ul className="pagination">
			<li className="page-item">
				<button className="page-link" onClick={() => setPage(page - 1)} disabled={page === 1}>&laquo;</button>
			</li>
			{Array(displayPageCount)
			 .fill(0)
			 .map((_, i) => (
			  	<li key={i} className={`page-item ${page === firstPage + i + 1 && 'active'}`}>
					<button className="page-link" onClick={() => setPage(firstPage + 1 + i)} aria-current={page === i + 1 ? "page" : null}>
						{firstPage + i + 1}
					</button>
				</li>
			  ))
			}
			<li className="page-item">
				<button className="page-link"  onClick={() => setPage(page + 1)} disabled={page === numPages}>&raquo;</button>
			</li>
		  </ul>
		</nav>
	)
}
export default Pagination;