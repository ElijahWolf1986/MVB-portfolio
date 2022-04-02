import React from 'react';
import styles from './AddArticle.module.css';
import Popup from '../Popup/Popup';
import { handleValidationLink } from '../../utils/ValidationForm';

const AddArticle = ({
  isPopupOpen,
  onClose,
  onAddArticle,
  //   article,
  onServerErrorMessage,
}) => {
  const [image, setImage] = React.useState('');
  const [name, setName] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [subtitle, setSubTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  const [errMessage, setErrMessage] = React.useState('');
  const [isButtonSaveDisabled, setButtonSaveDisabled] = React.useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!handleValidationLink(image) || !handleValidationLink(link)) {
      setErrMessage('Ссылка неверна');
    } else {
      onAddArticle(name, title, subtitle, image, link);
      formReset();
      onClose();
      return;
    }
  };

  const formReset = () => {
    setName('');
    setTitle('');
    setSubTitle('');
    setLink('');
    setImage('');
    setErrMessage('');
  };

  const handleChangeImage = (evt) => {
    setImage(evt.target.value);
    setErrMessage('');
  };

  const handleChangeName = (evt) => {
    setName(evt.target.value);
    setErrMessage('');
  };
  const handleChangeTitle = (evt) => {
    setTitle(evt.target.value);
    setErrMessage('');
  };

  const handleChangeSubTitle = (evt) => {
    setSubTitle(evt.target.value);
    setErrMessage('');
  };
  const handleChangeLink = (evt) => {
    setLink(evt.target.value);
    setErrMessage('');
  };

  React.useEffect(() => {
    //устанавливает кнопку сохранить в нужную кондицию при изменении полей ввода
    if (image && title && subtitle && link && name) {
      setButtonSaveDisabled(false);
    } else {
      setButtonSaveDisabled(true);
    }
  }, [
    handleChangeImage,
    handleChangeName,
    handleChangeTitle,
    handleChangeSubTitle,
    handleChangeLink,
  ]);

  React.useEffect(() => {
    formReset();
  }, [isPopupOpen]);

  return (
    <Popup isPopupOpen={isPopupOpen} onClose={onClose} onSubmit={handleSubmit}>
      <form
        onSubmit={handleSubmit}
        method='POST'
        className={styles.popup__form}
        noValidate
      >
        <fieldset className={styles.popup__form_auth}>
          <label className={styles.popup__label}>Имя статьи</label>
          <input
            type='text'
            value={name || ''}
            onChange={handleChangeName}
            name='name'
            required
            placeholder='Введите название статьи'
            className={styles.popup__input}
          />
          <label className={styles.popup__label}>Заголовок</label>
          <input
            type='text'
            value={title || ''}
            onChange={handleChangeTitle}
            name='title'
            required
            placeholder='Введите заголовок'
            className={styles.popup__input}
          />
          <label className={styles.popup__label}>Подзаголовок</label>
          <input
            type='text'
            value={subtitle || ''}
            onChange={handleChangeSubTitle}
            name='subtitle'
            required
            placeholder='Введите подзаголовок'
            className={styles.popup__input}
          />
          <label className={styles.popup__label}>
            Ссылка на обложку статьи
          </label>
          <input
            type='text'
            value={image || ''}
            onChange={handleChangeImage}
            name='image'
            required
            placeholder='Введите ссылку'
            className={styles.popup__input}
          />
          <label className={styles.popup__label}>Ссылка на статью</label>
          <input
            type='text'
            value={link || ''}
            onChange={handleChangeLink}
            name='link'
            required
            placeholder='Введите ссылку'
            className={styles.popup__input}
          />
          <span className={styles.popup__error_visible}>{errMessage}</span>
        </fieldset>
        <span className={styles.popup__server_error_visible}>
          {onServerErrorMessage}
        </span>
        <button
          type='submit'
          className={`${styles.popup__button_save} ${
            isButtonSaveDisabled && styles.popup__button_save_disabled
          }`}
          disabled={isButtonSaveDisabled}
        >
          Добавить статью
        </button>
      </form>
    </Popup>
  );
};

export default AddArticle;
