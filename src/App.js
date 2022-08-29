import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Router>
		  <Routes>
			  <Route path="/" element={<Home/>} />
			  <Route path={"*"} element={<NotFound/>} />
		  </Routes>
	  </Router>
  );
}

export default App;
