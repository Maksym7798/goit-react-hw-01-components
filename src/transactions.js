import React from "react";

function TransactionsInJSX({transData}){

  function markup(_){ 

    return( 
            _.map((data) => (
              <tr key={data.id} className="string">
                <td className="column">{data.type}</td>
                <td className="column">{data.amount}</td>
                <td className="column">{data.currency}</td>
              </tr>
            ))
          )
  }

  return(
          <table className="transaction-history">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody>{markup(transData)}</tbody>
          </table>
        )

}
export default TransactionsInJSX;