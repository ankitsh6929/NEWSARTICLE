import React from "react";
import BarChart from "../Charts/BarChart";

const NewsAnalytics = ({ articles }) => {
  return (
    <div>
      <h3>News Analytics</h3>
      <BarChart data={articles} />
    </div>
  );
};

export default NewsAnalytics;
