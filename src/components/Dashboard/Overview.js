import React, { useState, useEffect } from "react";
import { fetchNewsData } from "../../utils/api";
import PayoutDetails from "./PayoutDetails";
import NewsAnalytics from "./NewsAnalytics";

const Overview = () => {
  const [news, setNews] = useState([]);
  const [filters, setFilters] = useState({ author: "", type: "", dateRange: "" });

  useEffect(() => {
    fetchNewsData("technology").then(setNews);
  }, []);

  return (
    <div>
      <h2>Dashboard Overview</h2>
      <div>Total Articles: {news.length}</div>
      <NewsAnalytics articles={news} />
      <PayoutDetails articles={news} />
    </div>
  );
};

export default Overview;
