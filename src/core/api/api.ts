/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosResponse } from 'axios';

interface ApiInterface {
  page: number,
  name?: string,
  status?: string,
  id?: number,
  gender?: string,
}

export const getCharactersAPI = async (parameters: ApiInterface): Promise<AxiosResponse> => {
  const preparedParams = Object.entries(parameters).map(([key, value]) => `${key}=${value}`).join('&');

  return axios
    .get(`https://rickandmortyapi.com/api/character/?${preparedParams}`)
    .then(({ data }) => data);
};

export const getCharactersByID = async (id: ApiInterface): Promise<AxiosResponse> => axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => data);
