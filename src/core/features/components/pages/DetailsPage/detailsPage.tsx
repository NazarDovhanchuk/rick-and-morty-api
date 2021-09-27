/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { AppState } from '../../../../store/state';
import { setID } from './detailsPage.actions';

interface CharactersPageProps {
  id: number,
  name: string;
  species: string;
  image: string;
  type: string,
  gender: string,

}

const DetailsPage: React.FC<CharactersPageProps> = () => {
  const { id }:any = useParams();
  const details = useSelector((state: AppState) => state.charactersDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setID(id));
  }, []);

  return (
    <div className="details">
      <img src={details.image} alt="Characters" />
      <div>
        <h3>{details.name}</h3>
        <p>
          {details.species}
        </p>
        <div />
      </div>
    </div>
  );
};

export default DetailsPage;
