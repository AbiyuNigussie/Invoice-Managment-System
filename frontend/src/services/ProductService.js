import axios from "axios";

const getAllProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3030/api/inventory/products"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export { getAllProducts };
