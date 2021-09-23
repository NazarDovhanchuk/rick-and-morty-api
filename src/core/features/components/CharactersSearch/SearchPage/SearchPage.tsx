/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomButton from '../../../shared/CustomButton/CustomButton';
import { getCharacters, setCharacters } from '../../CharactersList/charactersList.actions';
// import { getCharactersList } from '../../CharactersList/charactersList.selector';
import { CharactersItem } from '../../CharactersList/charactersList.state';
import { getSearch } from '../charactersSearch.actions';
import { getCharactersSearch } from '../charactersSearch.selector';

import './style.scss';

const SearchPage = ():JSX.Element => {
  const characters = useSelector(getCharactersSearch);

  const dispatch = useDispatch();
  const [loadedCharacters, setLoadedCharacters] = useState<CharactersItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');
  const gender = queryParams.get('gender');
  const status = queryParams.get('status');

  const handlerOnClick = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getSearch({
      page, name: name || '', gender: gender || '', status: status || '',
    }));
  }, [page, name, gender, status]);

  useEffect(() => {
    setLoadedCharacters([...loadedCharacters, ...characters]);
  }, [characters]);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  if (loading) {
    return (
      <div>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    );
  }

  return (
    <>
      <div className="charachers">
        {loadedCharacters.map((person, index) => (
          <div className="characters__item" key={index}>
            <img src={person.image} alt="Characters" className="characters__image" />
            <div className="characters__information">
              <Link
                to={{
                  pathname: `/details/${person.id}`,
                }}
                style={{ textDecoration: 'none' }}
              >
                <h3 className="characters__name">{person.name}</h3>
              </Link>
              <p className="characters__species">
                {/* {person.stat} */}
                {' '}
                -
                {' '}
                {person.species}
              </p>
              <div className="characters__location">
                <p className="characters__location--info">Last known location:</p>
                {/* <p className="characters__location--details">{person.location.name}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CustomButton handlerOnClick={handlerOnClick} className="show-more__button" field="Show More" />

    </>
  );
};

export default SearchPage;
