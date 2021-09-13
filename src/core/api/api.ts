/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios';

interface ApiInterface {
  page: number,
  name?: string,
}

export const getAllCharacters = async (page?: ApiInterface) => axios
  .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  .then(({ data }) => data);

export const getSingleCharacters = async (name: ApiInterface, page: ApiInterface) => axios
  .get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
  .then(({ data }) => data);
