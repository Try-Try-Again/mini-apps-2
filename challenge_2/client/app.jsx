import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './components/Panel';


ReactDOM.render(
  <div>
    <Panel />
    <a href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a>
  </div>,
  document.getElementById('app'),
);
