import React from "react";
import transactionsData from "/Users/maksym/Public/goit-react-hw-01-components/src/transactions.json";

const murkup = transactionsData.map((data) => (
  <tr key={data.id} className="string">
    <td className="column">{data.type}</td>
    <td className="column">{data.amount}</td>
    <td className="column">{data.currency}</td>
  </tr>
));

const transactionsInJSX = (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>{murkup}</tbody>
  </table>
);
export default transactionsInJSX;