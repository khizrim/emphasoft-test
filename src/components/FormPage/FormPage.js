import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import InfoMessage from '../InfoMessage/InfoMessage';

import './FormPage.css';

function FormPage(props) {
  const {
    title,
    buttonText,
    captionText,
    children,
    isValid,
    validate,
    onSubmit,
    infoMessage,
  } = props;

  return (
    <div className="form-page">
      <Link className="form-page__logo-link" to="/">
        <img
          className="form-page__logo"
          src={logo}
          alt="Emphasoft Logo"
        />
      </Link>
      <h1 className="form-page__title">{title}</h1>
      <form
        className="form-page__form"
        id="form-page"
        autoComplete="on"
        onChange={validate}
        onSubmit={onSubmit}
        noValidate
      >
        {children}
      </form>
      <InfoMessage {...infoMessage} />
      <button
        form="form-page"
        className={`form-page__button ${
          !isValid ? 'form-page__button_disabled' : ''
        }`}
        type="submit"
        disabled={!isValid}
      >
        {buttonText}
      </button>
      <div className="form-page__caption">
        <p className="form-page__caption-text">{captionText}</p>
      </div>
    </div>
  );
}

export default FormPage;
