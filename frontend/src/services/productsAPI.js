import axios from "axios";
import { json } from "react-router-dom";

export const getProducts = async () => {
  const res = await axios.get("http://localhost:3030/products");
  return res.data;
};
