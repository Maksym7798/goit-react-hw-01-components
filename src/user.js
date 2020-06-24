import React from "react";
import userData from "/Users/maksym/Public/goit-react-hw-01-components/src/user.json";

const profileInJSX = (
  <div className="profile">
    <div className="description">
      <img src={userData.avatar} alt="user avatar" className="avatar" />
      <p className="name">{userData.name}</p>
      <p className="tag">@{userData.tag}</p>
      <p className="location">{userData.location}</p>
    </div>

    <ul className="stats">
      <li className='list'>
        <span className="label">Followers</span>
        <span className="quantity">{userData.stats.followers}</span>
      </li>
      <li className='list'>
        <span className="label">Views</span>
        <span className="quantity">{userData.stats.views}</span>
      </li>
      <li className='list'>
        <span className="label">Likes</span>
        <span className="quantity">{userData.stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default profileInJSX;
