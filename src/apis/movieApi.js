import axiosClient from "./axios";

const movieApi = {
  getPhimCategory: (category,params) => {
    const url = `/${category}`;
    return axiosClient.get(url, { params });
  },
  getMovieMain: (cateogry,nameMovie) => {
    const url = `/${cateogry}/?q=${nameMovie}`;
    return axiosClient.get(url);
  },
  getMovie: (cateogry, params) => {
    const url = `/${cateogry}`;
    return axiosClient.get(url, { params });
  },
};
export default movieApi;
