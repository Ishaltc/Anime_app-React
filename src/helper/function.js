import axios from "axios";
import { ANIME_API } from "./api";

export const getAnime = async () => {
  try {
    const data = await axios.get(ANIME_API);
  
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
