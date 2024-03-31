export const getCities=({page,sortBy})=>{
    return fetch(`https://naxi00998.herokuapp.com/api/data?_limit=5&_page=${page}&_sort=population&_order=${sortBy}`)
    .then(res=>res.json())
};


export const getCitiesByCountryName = ({ country }) => {
    if (!country) {
      return Promise.reject("country name to be provided");
    }
    return fetch(
      `https://naxi00998.herokuapp.com/api/data?country=${country}`
    ).then((res) => res.json());
  };
export const getCityById = (id) => {
    return fetch(
      `https://naxi00998.herokuapp.com/api/data/${id}`
    ).then((res) => res.json());
  };
  