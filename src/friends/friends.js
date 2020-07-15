import React from "react";
import PropTypes from 'prop-types';

function FriendsInJSX ({frData}){

  function markup(_){
    return(
            _.map((data) => (
              <li key={data.id} className="item-fr">
              <div className={data.isOnline.toString()}></div>
              <img className="avatar-friends" src={data.avatar} alt="" width="48" />
              <p className="name-fr">{data.name}</p>
              </li>
            ))
          )
  } 

  return(
          <div className='friends'>
            <ul className="friend-list">{markup(frData)}</ul>
          </div>
        )
}

FriendsInJSX.propTypes = {
  frData: PropTypes.arrayOf({
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
  })
}

export default FriendsInJSX;