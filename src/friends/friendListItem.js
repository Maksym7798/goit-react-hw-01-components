import React from 'react';
import PropTypes from 'prop-types';

function FriendListItem({avatar, isOnline, name}){
  return(
          
            <li className = 'item-fr'>
            <div className={String(isOnline)}></div>
            <img className="avatar-friends" src={avatar} alt="" width="48" />
            <p className="name-fr">{name}</p>
            </li>
          
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