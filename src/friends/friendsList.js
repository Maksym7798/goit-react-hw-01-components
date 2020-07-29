import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem'

function FriendsInJSX ({frData}){

  return(
          <div className='friends'>
            <ul className="friend-list">
              {frData.map(friend => <FriendListItem key      = {friend.id} 
                                                    avatar   = {friend.avatar}
                                                    isOnline = {friend.isOnline}
                                                    name     = {friend.name}/>)
              }
            </ul>
          </div>
        )
}

FriendsInJSX.propTypes = {
  frData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string
    })
  )
}

export default FriendsInJSX;

