import "./App.css";
import Header from "./header/Header";
import About from "./about/About";

import { Router, Routes, useNavigate } from "react-router-dom";

function App() {
  const history = useNavigate();
  return (
    // <Router history={history}>
    //   <Routes>
    <div className="App">
      <Header />
      <About />
    </div>
    //   </Routes>
    // </Router>
  );
}

export default App;
