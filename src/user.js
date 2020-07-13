import React from "react";

function ProfileInJSX ({avatar, name, tag, location, stats})  {
  return(
          <div className="profile">
            <div className="description">
              <img src={avatar} alt="user avatar" className="avatar" />
              <p className="name">{name}</p>
              <p className="tag">@{tag}</p>
              <p className="location">{location}</p>
            </div>

            <ul className="stats">
              <li className='list'>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
              </li>
              <li className='list'>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
              </li>
              <li className='list'>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
              </li>
            </ul>
          </div>
        )
};

export default ProfileInJSX;
