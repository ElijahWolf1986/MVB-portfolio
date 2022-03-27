import "./App.css";
import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Articles from "./articles/Articles";
import Designs from "./designs/Designs";
import Footer from "./footer/Footer";
import Popup from "./Popup/Popup";
import user from "../services/user.json";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(true);
  const [userInfo, setUserInfo] = React.useState("");

  function closePopup() {
    setIsPopupOpen(false);
  }

  React.useEffect(() => {
    setUserInfo(user);
  }, []);

  // console.log(user);
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} userInfo={userInfo} />
      <About user={userInfo} isLoggedIn={isLoggedIn} />
      <Articles isLoggedIn={isLoggedIn} />
      <Designs isLoggedIn={isLoggedIn} />
      <Footer />
      <Popup isPopupOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;
