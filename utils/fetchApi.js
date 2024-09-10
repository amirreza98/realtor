import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
		'x-rapidapi-key': 'c761a47c50msh8bc84643dd150dcp143525jsn68e609abc9c2',
		'x-rapidapi-host': 'bayut.p.rapidapi.com'
    },
  });  
  return data;
}