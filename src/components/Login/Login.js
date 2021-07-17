import React from 'react';

import useForm from '../../hooks/useForm';
import FormPage from '../FormPage/FormPage';

import './Login.css';

function Login(props) {
  const {
    isSubmitting, buttonState, infoMessage, onSubmit,
  } = props;

  const {
    handleChange, validateForm, values, errors, formValidity,
  } = useForm();

  const { username, password } = values;

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(username, password);
  }

  return (
    <div className="login">
      <FormPage
        title="Hello!"
        buttonText={buttonState || 'Sign In'}
        captionText="Don't have an account? Please contact the administrator"
        isValid={formValidity}
        validate={validateForm}
        onSubmit={handleSubmit}
        infoMessage={infoMessage}
      >
        <>
          <label htmlFor="username" className="form-page__label">
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={handleChange}
              className={`form-page__input ${
                errors.username ? 'form-page__input_type_error' : ''
              }`}
              placeholder="your_user_name"
              pattern="^[\w.@+-]+$"
              autoComplete="username"
              minLength="1"
              disabled={isSubmitting}
              required
            />
            {errors.username && (
              <span className="form-page__input-error">{errors.username}</span>
            )}
          </label>
          <label htmlFor="password" className="form-page__label">
            Password
            <input
              id="user-password"
              name="password"
              type="password"
              onChange={handleChange}
              className={`form-page__input ${
                errors.password ? 'form-page__input_type_error' : ''
              }`}
              autoComplete="current-password"
              placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
              minLength="8"
              disabled={isSubmitting}
              required
            />
            {errors.password && (
              <span className="form-page__input-error">{errors.password}</span>
            )}
          </label>
        </>
      </FormPage>
    </div>
  );
}

export default Login;
