import axios from 'axios';

interface ServerData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  origin: Array<{
    name: string;
    url: string;
  }>;
  image: string;
  episode: string;
  url: string;
  created: string;
}

const getAllCharacters = async (id?: number): Promise<ServerData> => axios
  .get<ServerData>(`https://rickandmortyapi.com/api/character/?page=${id}`)
  .then(({ data }) => data);

export { getAllCharacters };
