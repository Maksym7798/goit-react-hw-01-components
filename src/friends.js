import React from "react";
import friendsData from "/Users/maksym/Public/goit-react-hw-01-components/src/friends.json";

const murkup = friendsData.map((data) => (
  <li key={data.id} className="item-fr">
    <div className={data.isOnline.toString()}></div>
    <img className="avatar-friends" src={data.avatar} alt="" width="48" />
    <p className="name-fr">{data.name}</p>
  </li>
));

const friendsInJSX = (
  <div className='friends'>
    <ul className="friend-list">{murkup}</ul>
  </div>
);
export default friendsInJSX;