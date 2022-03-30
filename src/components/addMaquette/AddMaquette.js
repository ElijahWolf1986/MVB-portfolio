import React from "react";
import styles from "./AddMaquette.module.css";
import Popup from "../Popup/Popup";
import { handleValidationLink } from "../../utils/ValidationForm";

const AddMaquette = ({
  isPopupOpen,
  onClose,
  onAddMaquette,
  //   article,
  onServerErrorMessage,
}) => {
  const [image, setImage] = React.useState("");
  const [name, setName] = React.useState("");
  const [errMessage, setErrMessage] = React.useState("");
  const [isButtonSaveDisabled, setButtonSaveDisabled] = React.useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!handleValidationLink(image)) {
      setErrMessage("Ссылка неверна");
    } else {
      onAddMaquette(image, name);
      formReset();
      onClose();
      return;
    }
  };

  const formReset = () => {
    setName("");
    setImage("");
    setErrMessage("");
  };

  const handleChangeImage = (evt) => {
    setImage(evt.target.value);
    setErrMessage("");
  };

  const handleChangeName = (evt) => {
    setName(evt.target.value);
    setErrMessage("");
  };

  React.useEffect(() => {
    //устанавливает кнопку сохранить в нужную кондицию при изменении полей ввода
    if (image && name) {
      setButtonSaveDisabled(false);
    } else {
      setButtonSaveDisabled(true);
    }
  }, [handleChangeImage, handleChangeName]);

  React.useEffect(() => {
    formReset();
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
          <label className={styles.popup__label}>Имя макета</label>
          <input
            type="text"
            value={name || ""}
            onChange={handleChangeName}
            name="name"
            required
            placeholder="Введите название макета"
            className={styles.popup__input}
          />
          <label className={styles.popup__label}>Ссылка на макет</label>
          <input
            type="text"
            value={image || ""}
            onChange={handleChangeImage}
            name="image"
            required
            placeholder="Введите ссылку"
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
          Добавить макет
        </button>
      </form>
    </Popup>
  );
};

export default AddMaquette;
