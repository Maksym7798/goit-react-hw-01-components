import React from "react";
import statData from "/Users/maksym/Public/goit-react-hw-01-components/src/statistical-data.json";

const markup = statData.map((data) => (
  <li key={data.id} className="item">
    <span className="label">{data.label}</span>
    <span className="percentage">{data.percentage}%</span>
  </li>
));

const statisticsInJSX = (
  <section className="statistics">

    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">{markup}</ul>
  </section>
);

export default statisticsInJSX;
