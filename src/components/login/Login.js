import React from "react";
import styles from "./Login.module.css";
import Popup from "../Popup/Popup";
import {
  handleValidationEmail,
  handleValidationPassword,
} from "../../utils/ValidationForm";

const Login = ({
  isPopupOpen,
  onClose,
  onLogin,
  onResetForm,
  onServerErrorMessage,
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errMessageEmail, setErrMessageEmail] = React.useState("");
  const [errMessagePassword, setErrMessagePassword] = React.useState("");
  const [isButtonSaveDisabled, setButtonSaveDisabled] = React.useState(true);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setErrMessageEmail("");
    setErrMessagePassword("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (handleValidationEmail(email) && handleValidationPassword(password)) {
      onLogin(email, password);
      resetForm();
    } else {
      if (!handleValidationEmail(email))
        setErrMessageEmail("Неправильный формат email");
      if (!handleValidationPassword(password))
        setErrMessagePassword("Пароль введен неверно");
      return;
    }
  };

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
    setErrMessageEmail("");
  };

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
    setErrMessagePassword("");
  };

  React.useEffect(() => {
    //устанавливает кнопку сохранить в нужную кондицию при изменении полей ввода
    if (email && password) {
      setButtonSaveDisabled(false);
    } else {
      setButtonSaveDisabled(true);
    }
  }, [handleChangeEmail, handleChangePassword]);

  React.useEffect(() => {
    //сбрасывает форму при выходе из нее даже если пользователь не дошел до отправки формы и передумал заполнять
    if (onResetForm) {
      resetForm();
    }
  }, [onClose]);

  return (
    <Popup isPopupOpen={isPopupOpen} onClose={onClose} onSubmit={handleSubmit}>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className={styles.popup__form}
        noValidate
      >
        <fieldset className={styles.popup__form_auth}>
          <label className={styles.popup__label}>Email</label>
          <input
            type="email"
            value={email || ""}
            onChange={handleChangeEmail}
            name="email"
            required
            placeholder="Введите почту"
            className={styles.popup__input}
          />
          <span className={styles.popup__error_visible}>{errMessageEmail}</span>
          <label className={styles.popup__label}>Пароль</label>
          <input
            type="password"
            value={password || ""}
            onChange={handleChangePassword}
            name="password"
            required
            placeholder="Введите пароль"
            className={styles.popup__input}
          />
          <span className={styles.popup__error_visible}>
            {errMessagePassword}
          </span>
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
          Войти
        </button>
      </form>
    </Popup>
  );
};

export default Login;
