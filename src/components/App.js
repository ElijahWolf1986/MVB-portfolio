import "./App.css";
import Header from "./header/Header";
import About from "./about/About";
import Articles from "./articles/Articles";
import Designs from "./designs/Designs";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Articles />
      <Designs />
      <Footer />
    </div>
  );
}

export default App;
