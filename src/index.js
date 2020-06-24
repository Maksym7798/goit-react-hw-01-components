import '/Users/maksym/Public/goit-react-hw-01-components/src/index.css'
import ReactDOM from 'react-dom';
import profile from '/Users/maksym/Public/goit-react-hw-01-components/src/user';
import statistics from '/Users/maksym/Public/goit-react-hw-01-components/src/statistics';
import friends from '/Users/maksym/Public/goit-react-hw-01-components/src/friends';
import transactions from '/Users/maksym/Public/goit-react-hw-01-components/src/transactions'

ReactDOM.render([profile, statistics, friends, transactions], document.querySelector('#root'));
