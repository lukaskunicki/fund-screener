import apiURLs from "../../config/api/apiURLs";

const fetchFundsData = async () => {
  try {
    const response = await fetch(apiURLs.fundsList);
    return response.json();
  } catch (e) {
    console.error("Error fetching the data", e);
    return false;
  }
};

export default fetchFundsData;
