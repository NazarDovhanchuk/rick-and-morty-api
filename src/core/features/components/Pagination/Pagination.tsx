/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../../../store/state';
import { getCharacters } from '../CharactersList/charactersList.actions';

import './style.scss';

const Pagination = (): JSX.Element => {
  const { id }:any = useParams();
  const pageLength = useSelector((state: AppState) => state.charactersLength);
  const dispatch = useDispatch();

  dispatch(getCharacters({ page: id }));

  console.log(id);

  const pageArr = (num: number) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    return arr;
  };

  const getPageArr = pageArr(pageLength);

  return (
    <div className="pagination">
      {getPageArr.map((index) => (
        <Link
          key={index}
          to={{
            pathname: `/${index}`,
          }}
        >
          {index}
        </Link>
      ))}

    </div>
  );
};

export default Pagination;
