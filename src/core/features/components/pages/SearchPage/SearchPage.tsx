/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomButton from '../../../shared/CustomButton/CustomButton';
import { getCharactersLength } from '../../CharactersList/charactersList.selector';
import {
  getSearch, getSearchPage, toggleLoadMore,
} from '../../CharactersSearch/charactersSearch.actions';
import {
  getCharactersPage,
  getCharactersSearch, getLoadFailure, getLoadMore, getStatusLoad, setCharactersMore,
} from '../../CharactersSearch/charactersSearch.selector';

import './style.scss';

const SearchPage = ():JSX.Element => {
  const moreCharacters = useSelector(setCharactersMore);
  const isLoading = useSelector(getStatusLoad);
  const isLoadingMore = useSelector(getLoadMore);
  const totalPage: number = useSelector(getCharactersLength);
  const loadFailure = useSelector(getLoadFailure);
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(1);

  // get URL params
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');
  const gender = queryParams.get('gender');
  const status = queryParams.get('status');

  const handlerOnClick = (): void => {
    if (page === totalPage) return;
    dispatch(toggleLoadMore(true));

    setPage(page + 1);

    dispatch(getSearchPage({
      page, name: name || '', gender: gender || '', status: status || '',
    }));
  };

  useEffect(() => {
    dispatch(getSearch({
      page, name: name || '', gender: gender || '', status: status || '',
    }));
  }, [page, name, gender, status]);

  if (loadFailure) return <div><h1>Hero not Found</h1></div>;

  return (
    <>
      {!isLoading ? (
        <div className="loader loader__search-page">
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div className="charachers">
          {moreCharacters.map((person) => (
            <div className="characters__item" key={person.id}>
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
      )}

      {isLoadingMore ? (
        <div className="loader loader__search-page">
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
          />
        </div>
      ) : (
        <CustomButton
          handlerOnClick={handlerOnClick}
          className={page === totalPage ? 'button__show-more__disabled' : 'button__show-more'}
          field="Next Page"
        />
      )}

    </>
  );
};

export default SearchPage;
