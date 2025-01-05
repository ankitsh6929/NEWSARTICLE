import React, { useState } from "react";

const PayoutDetails = ({ articles }) => {
  const [payoutRate, setPayoutRate] = useState(5);      // Calculate the total payout based on articles and rate
  const totalPayout = articles.length * payoutRate;

  // Function to update payout rate
  const handleRateChange = (e) => {
    setPayoutRate(parseFloat(e.target.value) || 0); // Ensure numeric input
  };

  return (
    <div>
      <h2>Payout Details</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Payout Rate per Article:{" "}
          <input
            type="number"
            value={payoutRate}
            onChange={handleRateChange}
            min="0"
            step="0.01"
          />
        </label>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Author</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Articles</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Payout</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {article.author || "Unknown"}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {payoutRate.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 style={{ marginTop: "1rem" }}>Total #Article: {articles.length}, 
        Payout Rate: ${payoutRate},
        Total Payout: ${totalPayout.toFixed(2)}</h4>
    </div>
  );
};

export default PayoutDetails;