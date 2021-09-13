import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/state';
import { setPage } from './pagination.actions';

const Pagination = (): JSX.Element => {
  const page = useSelector((state: AppState) => state.charactersPage);
  const dispatch = useDispatch();

  const toPrevPage = (): void => {
    if (page === 1) return;

    dispatch(setPage(page - 1));
  };

  const toNextPage = (): void => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className="pagination">
      <button className="pagination__button" onClick={toPrevPage}>Prev Page</button>
      <button className="pagination__button" onClick={toNextPage}>Next Page</button>
    </div>
  );
};

export default Pagination;
