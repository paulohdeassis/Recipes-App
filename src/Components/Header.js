import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import imageProfile from '../images/profileIcon.svg';
import imageSearch from '../images/searchIcon.svg';
import appContext from '../context/appContext';

const PAGES_TITLE = ['Meals', 'Drinks'];
export default function Header({ title }) {
  const history = useHistory();

  const {
    searchBarBoolean,
    setSearchBarBoolean,
  } = useContext(appContext);

  const handleSearchBoolean = () => {
    if (searchBarBoolean === false) {
      setSearchBarBoolean(true);
    } else {
      setSearchBarBoolean(false);
    }
  };

  return (
    <section>
      <h2
        className="profile-title"
        data-testid="page-title"
      >
        {title}
      </h2>
      <button
        type="button"
        onClick={ () => { history.push('/profile'); } }
      >
        <img
          className="profile-image"
          data-testid="profile-top-btn"
          src={ imageProfile }
          alt="profile"
        />
      </button>
      {PAGES_TITLE.some((item) => item === title) && (
        <button
          type="button"
          onClick={ handleSearchBoolean }
        >
          <img
            className="profile-search"
            data-testid="search-top-btn"
            src={ imageSearch }
            alt="imagesSearch"
          />
        </button>
      )}
      <section>
        { searchBarBoolean
        && <input
          type="text"
          data-testid="search-input"
          placeholder="Digite aqui sua busca"
        /> }
      </section>
      <section>
        <label htmlFor="ingredient">
          Ingredientes
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            id="ingredient"
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            type="radio"
            data-testid="name-search-radio"
            id="name"
          />
        </label>
        <label htmlFor="first-letter">
          Primeira letra
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            id="first-letter"
          />
        </label>
        <button
          type="submit"
          data-testid="exec-search-btn"
          id="button"
        >
          Busca
        </button>
      </section>
    </section>

  );
}
// ou nod
Header.propTypes = {
  title: propTypes.string,
}.isRequired;
