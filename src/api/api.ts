import axios, { AxiosInstance } from 'axios';

// todo: move to .env
const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/search',
  timeout: 1000,
  params: {
    // DOESNt work(
    // api_key: 'CCz8gcPTfNtTpqtaLpK7yQldL7FiqRnT',
  },
});

export default instance;
