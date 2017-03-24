import React from 'react';
import ReactDOM from 'react-dom';

export class Orders extends React.Component{


  render() {
  if(this.props.page !== "Orders")
  return null;

  return <div className="header2"> Zamówienia<img src="./img/promocja.jpg"/></div>

  }


}
