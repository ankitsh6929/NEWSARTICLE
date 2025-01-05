import axios from "axios";

// Fetch news or blog data from a third-party API
export const fetchNewsData = async (query) => {
  const API_KEY = "a36661ec3e2c45c4b3907ee0635369b7"; // Replace with your API key
  const URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
  
  try {
    const response = await axios.get(URL);
    return response.data.articles || [];
  } catch (error) {
    console.error("Error fetching news data:", error.message);
    return []; // Return empty array in case of an error
  }
};
