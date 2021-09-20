/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../../../store/state';
import CustomButton from '../../shared/CustomButton/CustomButton';
import { getCharacters } from '../CharactersList/charactersList.actions';

import './style.scss';

const Pagination = (): JSX.Element => {
  const { id = '1' }: { id: string } = useParams();
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const dispatch = useDispatch();
  const totalPage = useSelector((state: AppState) => state.charactersLength);

  const pageArr = (num: number): number[] => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    return arr;
  };

  const getPageArr = pageArr(totalPage);

  const toPrevPage = (): string => {
    const prevPage = Math.max(1, +id - 1);

    if (+id + 3 <= maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - 1);
      setMinPageNumberLimit(minPageNumberLimit - 1);
    }

    console.log(id, maxPageNumberLimit);

    return `/page/${prevPage}`;
  };

  const toNextPage = (): string => {
    const nextPage = Math.min(totalPage, +id + 1);

    if (nextPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + 1);
      setMinPageNumberLimit(minPageNumberLimit + 1);
    }

    return `/page/${nextPage}`;
  };

  useEffect(() => {
    dispatch(getCharacters({ page: +id }));
  }, [id]);

  return (
    <div className="pagination">
      <Link to={toPrevPage}>
        <CustomButton handlerOnClick={toPrevPage} className="pagination__button" field="Prev page" />
      </Link>
      {getPageArr.map((index) => {
        if (index < maxPageNumberLimit + 1 && index > minPageNumberLimit) {
          return (
            <Link
              style={{ textDecoration: 'none' }}
              key={index}
              to={{
                pathname: `/page/${index}`,
              }}
            >
              <p className={index === +id ? 'pagination__item--active' : 'pagination__item'}>{index}</p>
            </Link>
          );
        }
      })}
      <Link to={toNextPage}>
        <CustomButton handlerOnClick={toNextPage} className="pagination__button" field="Next page" />
      </Link>

    </div>
  );
};

export default Pagination;
