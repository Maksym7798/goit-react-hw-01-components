import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem'

function FriendsInJSX ({frData}){

  return(
          <div className='friends'>
            <ul className="friend-list">
              <FriendListItem frData = {frData}/>
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

