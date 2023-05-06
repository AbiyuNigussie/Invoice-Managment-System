import axios from "axios";

const getAllCustomers = async () => {
  try {
    const response = await axios("http://localhost:3030/customer");
    return response.data;
  } catch (error) {
    return [{ error: "Error occured" }];
  }
};
