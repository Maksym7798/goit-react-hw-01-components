import React from "react";
import ReactDOM from 'react-dom';
import '/Users/maksym/Public/goit-react-hw-01-components/src/index.css';

import User from '/Users/maksym/Public/goit-react-hw-01-components/src/user/user';
import user from '/Users/maksym/Public/goit-react-hw-01-components/src/user/user.json';

import Statistics from '/Users/maksym/Public/goit-react-hw-01-components/src/statistics/statistics';
import statistics from '/Users/maksym/Public/goit-react-hw-01-components/src/statistics/statistical-data.json';

import Friends from '/Users/maksym/Public/goit-react-hw-01-components/src/friends/friendsList';
import friendsData from '/Users/maksym/Public/goit-react-hw-01-components/src/friends/friends.json';

import Transactions from '/Users/maksym/Public/goit-react-hw-01-components/src/transactions/transactions';
import transactionsData from '/Users/maksym/Public/goit-react-hw-01-components/src/transactions/transactions.json'

function ToRender (){
  return(
    <>
      <User
        avatar   ={user.avatar}
        name     ={user.name}
        tag      ={user.tag}
        location ={user.location}
        stats    ={user.stats}
      />

      <Statistics
        title    = {'Upload stats'}
        statData = {statistics}
      />

      <Friends
        frData = {friendsData}
      />
      
      <Transactions
        transData = {transactionsData}
      />
    </>
  )
}
ReactDOM.render(ToRender(), document.querySelector('#root'));