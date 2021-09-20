/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const totalPage = useSelector((state: AppState) => state.charactersLength);

  const dispatch = useDispatch();

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
      <Link to={toPrevPage} onClick={toPrevPage}>
        <CustomButton handlerOnClick={toPrevPage} className="pagination__button" field="Prev page" />
      </Link>
      {getPageArr.map((index) => {
        if (index < maxPageNumberLimit + 1 && index > minPageNumberLimit) {
          return (
            <Link
              key={index}
              to={{
                pathname: `/page/${index}`,
              }}
            >
              <p className="pagination__item">{index}</p>
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
