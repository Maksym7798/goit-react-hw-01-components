import React from "react";
import PropTypes from 'prop-types';

function StatisticsInJSX ({title = '', statData}){

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
            { title ? <h2 className="title">{title}</h2> : ''}
            <ul className="stat-list">
              {markup(statData)}
            </ul>
          </section>
        )
};

StatisticsInJSX.propTypes = {
  statData: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number
    })
  )
}

export default StatisticsInJSX;