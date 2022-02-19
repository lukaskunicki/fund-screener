import { apiURLs } from "../config/api/apiURLs";

const fetchFundsData = async () => {
  try {
    const response = await fetch(apiURLs.fundsList);
    return response.json();
  } catch (e) {
    throw new Error("Error fetching the data");
  }
};

export { fetchFundsData };
