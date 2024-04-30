import { BASE_URL } from "../Constants/constants";
import { create } from "apisauce";

export const searchSongsApi = async (term) => {
  return new Promise(async (resolve, reject) => {
    try {
      const api = create(BASE_URL);
      const response = await api
        .get(`${BASE_URL}?term=${term}`)
        .then((res) => res.data);

      const searchedItems = response.results;
      return resolve(searchedItems);
    } catch (err) {
      return reject(err);
    }
  });
};
