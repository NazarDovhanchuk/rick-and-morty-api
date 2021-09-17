/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../../store/state';
import CustomButton from '../../shared/CustomButton/CustomButton';
import { getCharacters } from '../CharactersList/charactersList.actions';
import { setPage } from './pagination.actions';

import './style.scss';

const Pagination = (): JSX.Element => {
  const page = useSelector((state: AppState) => state.charactersPage);
  const pageLength = useSelector((state: AppState) => state.charactersLength);
  const dispatch = useDispatch();

  const pageArr = (num: number) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    return arr;
  };

  const getPageArr = pageArr(pageLength);

  console.log(getPageArr);

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
      {getPageArr.map((index) => (
        <Link
          key={index}
          to={{
            pathname: `/page${index}`,
          }}
        >
          {index}
        </Link>
      ))}
      <CustomButton handlerOnClick={toPrevPage} className="pagination__button" field="Prev page" />
      <CustomButton handlerOnClick={toNextPage} className="pagination__button" field="Next page" />
    </div>
  );
};

export default Pagination;
