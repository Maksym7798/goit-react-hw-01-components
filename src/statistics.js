import React from "react";


function StatisticsInJSX ({statData}){

  function markup(statData){
      
    return(
            statData.map(data => (
              <li key={data.id} className="item">
                <span className="label">{data.label}</span>
                <span className="percentage">{data.percentage}%</span>
              </li>
            ))
          )
  }

  return( 
          <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
              {markup(statData)}
            </ul>
          </section>
        )
};

export default StatisticsInJSX;
