import axios from "axios";

export const API_URL = "http://localhost:5000/pages";

export const new_page = async (name) => {
  try {
    const response = await axios.post(`${API_URL}/`, { name });
    return response.data;
  } catch (error) {
    console.log("error is ===>>>", error);
  }
};
