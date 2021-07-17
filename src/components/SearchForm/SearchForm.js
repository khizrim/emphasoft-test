import React from 'react';

import useForm from '../../hooks/useForm';

import './SearchForm.css';

function SearchForm(props) {
  const {
    checkBoxState, onCheck, onSubmit, onReset,
  } = props;

  const {
    handleChange,
    validateForm,
    setValues,
    setFormValidity,
    reset,
    values,
    errors,
    formValidity,
  } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.key, reset);
  }

  function handleReset(e) {
    e.preventDefault();
    onReset();
    reset();
  }

  React.useEffect(() => {
    const searchKey = localStorage.getItem('searchKey');

    if (searchKey) {
      setValues({
        key: searchKey,
      });
      setFormValidity(true);
    }
  }, [setFormValidity]);

  return (
    <>
      <div className="search-form">
        <div className="search-form__input-container">
          <form
            className="search-form__form"
            id="search-form"
            onChange={validateForm}
            onSubmit={handleSubmit}
          >
            <input
              id="user"
              name="key"
              type="text"
              value={values.key || ''}
              onChange={handleChange}
              className="search-form__input"
              placeholder="User"
              minLength="2"
              required
            />
            {formValidity && (
              <button
                type="button"
                aria-label="Reset"
                className="search-form__reset"
                onClick={handleReset}
              />
            )}
            <button
              className={`search-form__button ${
                !formValidity ? 'search-form__button_disabled' : ''
              }`}
              type="submit"
              aria-label="Search"
              disabled={!formValidity}
            />
          </form>
          {errors.key && (
            <span className="search-form__input-error">{errors.key}</span>
          )}
        </div>
        <label className="search-form__filter" htmlFor="filter">
          Only Active
          <input
            id="filter"
            type="checkbox"
            className="search-form__filter-checkbox"
            checked={checkBoxState}
            onChange={onCheck}
          />
        </label>
      </div>
    </>
  );
}

export default SearchForm;
