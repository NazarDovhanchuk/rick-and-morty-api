/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosResponse } from 'axios';

interface ApiInterface {
  page: number,
  name?: string,
  status?: string,
  gender?: string
}

export const getAllCharacters = async (page?: ApiInterface) => axios
  .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  .then(({ data }) => data);

export const getSingleCharacters = async (name: ApiInterface, page: ApiInterface) => axios
  .get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
  .then(({ data }) => data);

export const getCharactersAPI = async (parameters: ApiInterface): Promise<AxiosResponse> => {
  const preparedParams = Object.entries(parameters).map(([key, value]) => `${key}=${value}`).join('&');

  return axios
    .get(`https://rickandmortyapi.com/api/character/?${preparedParams}`)
    .then(({ data }) => data);
};
