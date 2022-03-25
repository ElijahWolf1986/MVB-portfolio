import "./App.css";
import Header from "./header/Header";
import About from "./about/About";
import Articles from "./articles/Articles";
import Designs from "./designs/Designs";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Articles />
      <Designs />
    </div>
  );
}

export default App;
