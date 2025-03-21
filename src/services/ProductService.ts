// lam_dev thay api url tất cả đây

import axios from "axios";
import {
  ProductCategories,
  User,
  Admin,
  CharactersResponse,
  CharactersType,
} from "../types/dataType";

//DATA IS FIXING
const REST_API_PRODUCTS_URL = `http://localhost:8080/api/products`;
const apiHomePageResources = async (): Promise<ProductCategories[]> => {
  const response = await axios.get<ProductCategories[]>(REST_API_PRODUCTS_URL);
  const data = response.data;
  return data;
};
//DATA IS FIXING
const REST_API_SEARCH_URL = `http://localhost:8080/api/search`;
const apiSearchResult = async (): Promise<ProductCategories[]> => {
  const response = await axios.get<ProductCategories[]>(REST_API_SEARCH_URL);
  const data = response.data;
  return data;
};

const REST_API_CHARACTERS_URL = `http://103.28.33.98:8080/api/v1/character`;
const apiCharacters = async (): Promise<CharactersType[]> => {
  const response = await axios.get<CharactersResponse>(REST_API_CHARACTERS_URL);
  const data = response.data.data;
  return data;
};
//DATA IS FIXING
const REST_API_PRODUCTS_CATEGORIES_URL = `http://localhost:8080/api/products-categories`;
const apiProductCategories = async (): Promise<ProductCategories[]> => {
  const response = await axios.get<ProductCategories[]>(
    REST_API_PRODUCTS_CATEGORIES_URL
  );
  const data = response.data;
  return data;
};
//DATA IS FIXING
const REST_API_USER_URL = `http://localhost:8080/api/user`;
const apiUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(REST_API_USER_URL);
  const data = response.data;
  return data;
};

//DATA IS FIXING
const REST_API_ADMIN_URL = `http://localhost:8080/api/admin`;
const apiAdmins = async (): Promise<Admin[]> => {
  const response = await axios.get<Admin[]>(REST_API_ADMIN_URL);
  const data = response.data;
  return data;
};

export {
  apiHomePageResources,
  apiSearchResult,
  apiCharacters,
  apiProductCategories,
  apiUsers,
  apiAdmins,
};
