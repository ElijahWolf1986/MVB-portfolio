import "./App.css";
import React from "react";
import * as MainApi from "../utils/MainApi";
import Header from "./header/Header";
import About from "./about/About";
import Articles from "./articles/Articles";
import Designs from "./designs/Designs";
import Footer from "./footer/Footer";
import Login from "./login/Login";
import PopupImgView from "./popupImgView/PopupImgView";
import EditAbout from "./editAbout/EditAbout";
import EditArticle from "./editArticle/EditArticle";
import AddArticle from "./addArticle/AddArticle";
import AddMaquette from "./addMaquette/AddMaquette";
import aboutDefault from "../services/about.json";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isPopupOpenLogin, setIsPopupOpenLogin] = React.useState(false);
  const [isPopupOpenEditAbout, setIsPopupOpenEditAbout] = React.useState(false);
  const [isPopupOpenEditArticle, setIsPopupOpenEditArticle] =
    React.useState(false);
  const [isPopupOpenAddArcticle, setIsPopupOpenAddArcticle] =
    React.useState(false);
  const [isPopupOpenAddMaquette, setIsPopupOpenAddMaquette] =
    React.useState(false);

  const [isPopupOpenView, setIsPopupOpenView] = React.useState(false);

  const [isResetForm, setIsResetForm] = React.useState(false);
  const [errorServerMessage, setErrorServerMessage] = React.useState("");

  const [userInfo, setUserInfo] = React.useState("");
  const [aboutInfo, setAboutInfo] = React.useState("");

  const [maquette, setMaquette] = React.useState("");
  const [article, setArticle] = React.useState("");

  function closePopup() {
    setIsPopupOpenView(false);
    setIsPopupOpenLogin(false);
    setIsPopupOpenEditAbout(false);
    setIsPopupOpenEditArticle(false);
    setIsPopupOpenAddArcticle(false);
    setIsPopupOpenAddMaquette(false);
    setIsResetForm(true);
    setErrorServerMessage("");
    setMaquette("");
  }
  const onLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    localStorage.loggedIn = isLoggedIn;
    setUserInfo("");
    localStorage.keyword = "";
    localStorage.totalResult = 0;
    localStorage.setItem("cards", JSON.stringify([]));
    // history.push("/");
  };

  function openLoginForm() {
    setIsPopupOpenLogin(true);
  }

  const openEditAbout = () => {
    setIsPopupOpenEditAbout(true);
  };

  const openAddArticle = () => {
    setIsPopupOpenAddArcticle(true);
  };

  const openAddMaquette = () => {
    setIsPopupOpenAddMaquette(true);
  };

  const openEditArticle = (article) => {
    setArticle(article);
    setIsPopupOpenEditArticle(true);
  };

  const tokenCheck = () => {
    //Проверка на наличие токена в локальном хранилище
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      setIsLoggedIn(true);
      getUserInfo();
    }
  };
  const getUserInfo = () => {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getUserInfo(jwt)
        .then((res) => {
          setUserInfo(res.name);
        })
        .catch((err) => {
          setUserInfo("NoName");
        });
    }
  };

  const getAboutInfo = () => {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getAboutInfo(jwt)
        .then((res) => {
          setAboutInfo(res.data[0]);
        })
        .catch((err) => {
          setUserInfo(aboutDefault);
        });
    }
  };

  // const editAboutInfo = () => {
  //   let jwt = localStorage.getItem("jwt");
  //   if (jwt) {
  //     MainApi.getAboutInfo(jwt)
  //       .then((res) => {
  //         setAboutInfo(res);
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         setUserInfo(aboutDefault);
  //       });
  //   }
  // };

  const onLogin = (email, password) => {
    MainApi.authorize(email, password)
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
          closePopup();
          localStorage.loggedIn = isLoggedIn;
          getUserInfo();
        }
      })
      .catch((err) => {
        if (err.status === 401 || err.status === 403) {
          setErrorServerMessage("Неверный логин или пароль");
        } else {
          setErrorServerMessage(err.statusText);
        }
        setTimeout(() => {
          setErrorServerMessage("");
        }, 2000);
      });
  };

  const handleAbout = (image, title, about1, about2) => {
    let jwt = localStorage.getItem("jwt");
    return MainApi.editAboutInfo(jwt, title, about1, about2, image).catch(
      (err) => console.log(err.message)
    );
  };

  const handleAddArticle = (name, image, title, link) => {
    console.log("добавили статью");
  };

  const handleAddMaquette = (name, image) => {
    console.log("добавили макет");
  };

  const handleEditArticle = (name, image, title, link) => {};

  const handleDeleteArticle = (article) => {
    console.log("прикончим эту статью)");
    console.log(article);
  };

  const onViewMaquette = (maquette) => {
    // props.onView(maquette);
    setMaquette(maquette);
    // console.log(maquette);
    setIsPopupOpenView(true);
  };

  const handleDeleteMaquette = (maquette) => {
    console.log("удаляем макет", maquette);
    // console.log(maquette);
  };

  React.useEffect(() => {
    tokenCheck();
    getAboutInfo();
  }, []);

  React.useEffect(() => {
    getAboutInfo();
  }, [handleAbout]);

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
        about={aboutInfo}
        isLoggedIn={isLoggedIn}
        openEditAbout={openEditAbout}
      />
      <Articles
        isLoggedIn={isLoggedIn}
        openEditArticle={openEditArticle}
        deleteArticle={handleDeleteArticle}
        openAddArticle={openAddArticle}
      />
      <Designs
        isLoggedIn={isLoggedIn}
        onViewMaquette={onViewMaquette}
        onDeleteMaquette={handleDeleteMaquette}
        openAddMaquette={openAddMaquette}
      />
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
        aboutInfo={aboutInfo}
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

      <AddArticle
        isPopupOpen={isPopupOpenAddArcticle}
        onClose={closePopup}
        // article={article}
        onAddArticle={handleAddArticle}
        onServerErrorMessage={errorServerMessage}
      />

      <AddMaquette
        isPopupOpen={isPopupOpenAddMaquette}
        onClose={closePopup}
        onAddMaquette={handleAddMaquette}
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
