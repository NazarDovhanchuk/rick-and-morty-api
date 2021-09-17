/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/state';
import CustomButton from '../../shared/CustomButton/CustomButton';
import { getCharacters } from '../CharactersList/charactersList.actions';
import { setPage } from './pagination.actions';

import './style.scss';

const Pagination = (): JSX.Element => {
  const page = useSelector((state: AppState) => state.charactersPage);
  const dispatch = useDispatch();

  console.log(page);

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
      <CustomButton handlerOnClick={toPrevPage} className="pagination__button" field="Prev page" />
      <CustomButton handlerOnClick={toNextPage} className="pagination__button" field="Next page" />
    </div>
  );
};

export default Pagination;
