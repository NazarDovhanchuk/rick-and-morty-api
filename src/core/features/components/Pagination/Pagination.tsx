/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../../../store/state';
import CustomButton from '../../shared/CustomButton/CustomButton';
import { getCharacters, setCharacters } from '../CharactersList/charactersList.actions';
import { getCharactersLength } from '../CharactersList/charactersList.selector';

import './style.scss';

const Pagination = (): JSX.Element => {
  const { id = '1' }: { id: string } = useParams();
  const dispatch = useDispatch();

  const totalPage: number = useSelector(getCharactersLength);

  // page who we see
  const [activePage, setActivePage] = useState<number[]>([]);

  const toPrevPage = (): string => {
    const prevPage = Math.max(1, +id - 1);

    return `/page/${prevPage}`;
  };

  const toNextPage = (): string => {
    const nextPage = Math.min(totalPage, +id + 1);

    return `/page/${nextPage}`;
  };

  const range = (start: number, end: number): number[] => {
    const initial = start;
    const active = end;
    const arr = [];

    for (let i = initial; i <= active; i++) {
      arr.push(i);
    }

    return arr;
  };

  useEffect(() => {
    const siblingsLength = 1;
    const maxRange = 5;
    const currentPage = +id;
    const boundaryCount = 1;

    const startPages = range(1, Math.min(boundaryCount, totalPage));
    const endPages = range(Math.min(totalPage, totalPage - boundaryCount + 1), totalPage);

    let centerPages: number[] = [];

    if (currentPage < maxRange) {
      centerPages = range(boundaryCount + 1, maxRange);
    } else if (totalPage - maxRange < currentPage) {
      centerPages = range(totalPage - maxRange, totalPage - boundaryCount);
    } else {
      centerPages = range(currentPage - siblingsLength, currentPage + siblingsLength);
    }

    setActivePage([...startPages, ...centerPages, ...endPages]);

    dispatch(getCharacters({
      page: +id,
    }));
  }, [id, totalPage]);

  return (
    <div className="pagination">
      <Link to={toPrevPage}>
        <CustomButton handlerOnClick={toPrevPage} className="pagination__button" field="Prev Page" />
      </Link>
      {activePage.map((index) => (
        <Link
          style={{ textDecoration: 'none' }}
          key={index}
          to={{
            pathname: `/page/${index}`,
          }}
        >
          <p className={index === +id ? 'pagination__item--active' : 'pagination__item'}>{index}</p>
        </Link>
      ))}
      <Link to={toNextPage}>
        <CustomButton handlerOnClick={toNextPage} className="pagination__button" field="Next Page" />
      </Link>
    </div>
  );
};

export default Pagination;
