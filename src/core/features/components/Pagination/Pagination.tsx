import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/state';
import { getCharacters } from '../CharactersList/charactersList.actions';
import { setPage } from './pagination.actions';

import './style.scss';

const Pagination = (): JSX.Element => {
  const page = useSelector((state: AppState) => state.charactersPage);
  const pageLength = useSelector((state: AppState) => state.charactersLength);
  const dispatch = useDispatch();
  console.log(pageLength);

  const getPageLength = (num: number): number[] => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    return arr;
  };
  const pagesArray = getPageLength(pageLength);

  const toPrevPage = (): void => {
    if (page === 1) return;

    dispatch(setPage(page - 1));
    dispatch(getCharacters({ page: page - 1 }));
  };

  const toNextPage = (): void => {
    dispatch(setPage(page + 1));
    dispatch(getCharacters({ page: page + 1 }));
  };

  return (
    <div className="pagination">
      <button className="pagination__button" onClick={toPrevPage}>Prev Page</button>
      {pagesArray.map((el) => (
        <p className="pagination__page" key={el}>{el}</p>
      ))}
      <button className="pagination__button" onClick={toNextPage}>Next Page</button>
    </div>
  );
};

export default Pagination;
