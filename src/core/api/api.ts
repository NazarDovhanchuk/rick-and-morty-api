/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios';

// interface ServerData {
//   id: number;
//   name: string;
//   status: string;
//   species: string;
//   type: string;
//   origin: Array<{
//     name: string;
//     url: string;
//   }>;
//   image: string;
//   episode: string;
//   url: string;
//   created: string;
// }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAllCharacters = async (page?: number) => axios
  .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  .then(({ data }) => data);
