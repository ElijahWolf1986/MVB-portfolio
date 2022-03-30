import React from "react";
import styles from "./EditAbout.module.css";
import Popup from "../Popup/Popup";
import { handleValidationLink } from "../../utils/ValidationForm";

const EditAbout = ({
  isPopupOpen,
  onClose,
  onAbout,
  aboutInfo,
  onServerErrorMessage,
}) => {
  const [image, setImage] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [about1, setAbout1] = React.useState("");
  const [about2, setAbout2] = React.useState("");
  const [errMessage, setErrMessage] = React.useState("");
  const [isButtonSaveDisabled, setButtonSaveDisabled] = React.useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!handleValidationLink(image)) {
      setErrMessage("Ссылка неверна");
    } else {
      onAbout(image, title, about1, about2);
      onClose();
      return;
    }
  };

  const handleChangeAvatar = (evt) => {
    setImage(evt.target.value);
    setErrMessage("");
  };

  const handleChangeTitle = (evt) => {
    setTitle(evt.target.value);
    setErrMessage("");
  };
  const handleChangeAbout1 = (evt) => {
    setAbout1(evt.target.value);
    setErrMessage("");
  };
  const handleChangeAbout2 = (evt) => {
    setAbout2(evt.target.value);
    setErrMessage("");
  };

  React.useEffect(() => {
    //устанавливает кнопку сохранить в нужную кондицию при изменении полей ввода
    if (image && title && about1 && about2) {
      setButtonSaveDisabled(false);
    } else {
      setButtonSaveDisabled(true);
    }
  }, [
    handleChangeAvatar,
    handleChangeTitle,
    handleChangeAbout1,
    handleChangeAbout2,
  ]);

  React.useEffect(() => {
    setImage(aboutInfo.image);
    setTitle(aboutInfo.title);
    setAbout1(aboutInfo.about1);
    setAbout2(aboutInfo.about2);
    setErrMessage("");
  }, [isPopupOpen]);

  return (
    <Popup isPopupOpen={isPopupOpen} onClose={onClose} onSubmit={handleSubmit}>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className={styles.popup__form}
        noValidate
      >
        <fieldset className={styles.popup__form_auth}>
          <label className={styles.popup__label}>Аватарка</label>
          <input
            type="text"
            value={image || ""}
            onChange={handleChangeAvatar}
            name="avatar"
            // required
            placeholder="Введите ссылку на фотографию"
            className={styles.popup__input}
          />
          <label className={styles.popup__label}>Заголовок</label>
          <input
            type="text"
            value={title || ""}
            onChange={handleChangeTitle}
            name="title"
            // required
            placeholder="Введите заголовок"
            className={styles.popup__input}
          />
          <label className={styles.popup__label}>Описание</label>
          <textarea
            type="text"
            rows="3"
            value={about1 || ""}
            onChange={handleChangeAbout1}
            name="about1"
            // required
            placeholder="Введите описание"
            className={styles.popup__input}
          />
          <label className={styles.popup__label}>Заключение</label>
          <textarea
            rows="3"
            type="text"
            value={about2 || ""}
            onChange={handleChangeAbout2}
            name="about2"
            // required
            placeholder="Введите заключение"
            className={styles.popup__input}
          />
          <span className={styles.popup__error_visible}>{errMessage}</span>
        </fieldset>
        <span className={styles.popup__server_error_visible}>
          {onServerErrorMessage}
        </span>
        <button
          type="submit"
          className={`${styles.popup__button_save} ${
            isButtonSaveDisabled && styles.popup__button_save_disabled
          }`}
          disabled={isButtonSaveDisabled}
        >
          Изменить данные
        </button>
      </form>
    </Popup>
  );
};

export default EditAbout;
