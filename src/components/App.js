import "./App.css";
import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Articles from "./articles/Articles";
import Designs from "./designs/Designs";
import Footer from "./footer/Footer";
import Login from "./login/Login";
import PopupImgView from "./popupImgView/PopupImgView";
import EditAbout from "./editAbout/EditAbout";
import EditArticle from "./editArticle/EditArticle";
import user from "../services/user.json";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isPopupOpenLogin, setIsPopupOpenLogin] = React.useState(false);
  const [isPopupOpenEditAbout, setIsPopupOpenEditAbout] = React.useState(false);
  const [isPopupOpenEditArticle, setIsPopupOpenEditArticle] =
    React.useState(false);

  const [isPopupOpenView, setIsPopupOpenView] = React.useState(false);

  const [isResetForm, setIsResetForm] = React.useState(false);
  const [errorServerMessage, setErrorServerMessage] = React.useState("");

  const [userInfo, setUserInfo] = React.useState("");

  const [maquette, setMaquette] = React.useState("");
  const [article, setArticle] = React.useState("");

  function closePopup() {
    setIsPopupOpenView(false);
    setIsPopupOpenLogin(false);
    setIsPopupOpenEditAbout(false);
    setIsPopupOpenEditArticle(false);
    setIsResetForm(true);
    setErrorServerMessage("");
    setMaquette("");
  }
  const onLogout = () => {
    setIsLoggedIn(false);
  };

  function openLoginForm() {
    setIsPopupOpenLogin(true);
  }

  const openEditAbout = () => {
    setIsPopupOpenEditAbout(true);
  };

  const onLogin = (email, password) => {
    //функция по отправке запроса на авторизацию
    // const onLogin = (email, password) => {
    //   ////тут обработака запроса авторизации
    //   MainApi.authorize(email, password)
    //     .then((data) => {
    //       if (data) {
    //         setLoggedIn(true);
    //         closeAllPopups();
    //         localStorage.loggedIn = loggedIn;
    //         getUserInfo();
    //         getUsersArticles();
    //       }
    //     })
    //     .catch((err) => {
    //       if (err.status === 401 || err.status === 403) {
    //         setErrorServerMessage("Неверный логин или пароль");
    //       } else {
    //         setErrorServerMessage(err.statusText);
    //       }
    //       setTimeout(() => {
    //         setErrorServerMessage("");
    //       }, 2000);
    //     });
    // };
  };

  const handleAbout = (image, title, about1, about2) => {
    //функция по редактированию блока about
  };

  const handleEditArticle = (name, image, title, link) => {};

  const openEditArticle = (article) => {
    setArticle(article);
    setIsPopupOpenEditArticle(true);
  };

  const onViewMaquette = (maquette) => {
    // props.onView(maquette);
    setMaquette(maquette);
    // console.log(maquette);
    setIsPopupOpenView(true);
  };

  React.useEffect(() => {
    setUserInfo(user);
  }, []);

  // console.log(user);
  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        userInfo={userInfo}
        openLoginForm={openLoginForm}
        onLogout={onLogout}
      />
      <About
        user={userInfo}
        isLoggedIn={isLoggedIn}
        openEditAbout={openEditAbout}
      />
      <Articles isLoggedIn={isLoggedIn} openEditArticle={openEditArticle} />
      <Designs isLoggedIn={isLoggedIn} onViewMaquette={onViewMaquette} />
      <Footer />
      <Login
        isPopupOpen={isPopupOpenLogin}
        onClose={closePopup}
        onResetForm={isResetForm}
        onServerErrorMessage={errorServerMessage}
        onLogin={onLogin}
      />
      <EditAbout
        isPopupOpen={isPopupOpenEditAbout}
        onClose={closePopup}
        aboutInfo={userInfo}
        onAbout={handleAbout}
        onServerErrorMessage={errorServerMessage}
      />

      <EditArticle
        isPopupOpen={isPopupOpenEditArticle}
        onClose={closePopup}
        article={article}
        onEditArticle={handleEditArticle}
        onServerErrorMessage={errorServerMessage}
      />
      <PopupImgView
        isPopupOpen={isPopupOpenView}
        onClose={closePopup}
        maquette={maquette}
      />
    </div>
  );
}

export default App;
