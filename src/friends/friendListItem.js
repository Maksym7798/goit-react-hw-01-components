import React from 'react';
import PropTypes from 'prop-types';

function FriendListItem({frData}){
  return(
          frData.map((data) => (
            <li key={data.id} className="item-fr">
            <div className={data.isOnline.toString()}></div>
            <img className="avatar-friends" src={data.avatar} alt="" width="48" />
            <p className="name-fr">{data.name}</p>
            </li>
          ))
        )
} 

FriendListItem.propTypes = {
  frData: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number,
          isOnline: PropTypes.bool,
          avatar: PropTypes.string,
          name: PropTypes.string
      })
  )
}

export default FriendListItem;