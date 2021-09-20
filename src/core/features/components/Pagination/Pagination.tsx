/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../../../store/state';
import CustomButton from '../../shared/CustomButton/CustomButton';
import { getCharacters } from '../CharactersList/charactersList.actions';

import './style.scss';

const Pagination = (): JSX.Element => {
  const { id = '1' }: { id: string } = useParams();

  const totalPage = useSelector((state: AppState) => state.charactersLength);
  const dispatch = useDispatch();

  const pageArr = (num: number) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    return arr;
  };

  const getPageArr = pageArr(totalPage);

  const toPrevPage = (): string => {
    const prevPage = Math.max(1, +id - 1);

    return `/page/${prevPage}`;
  };

  const toNextPage = (): string => {
    const nextPage = Math.min(totalPage, +id + 1);

    return `/page/${nextPage}`;
  };

  useEffect(() => {
    dispatch(getCharacters({ page: +id }));
  }, []);

  return (
    <div className="pagination">
      <Link to={toPrevPage}>
        <CustomButton handlerOnClick={toPrevPage} className="pagination__button" field="Prev page" />
      </Link>
      {getPageArr.map((index) => (
        <Link
          key={index}
          to={{
            pathname: `/page/${index}`,
          }}
        >
          <p className="pagination__item">{index}</p>
        </Link>
      ))}
      <Link to={toNextPage}>
        <CustomButton handlerOnClick={toNextPage} className="pagination__button" field="Prev page" />
      </Link>

    </div>
  );
};

export default Pagination;
