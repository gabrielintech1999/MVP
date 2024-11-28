import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getProducts = async () => {
  const { data } = await axios.get(`${BASE_URL}/products`);
  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/products/${id}`);
  return data;
};
