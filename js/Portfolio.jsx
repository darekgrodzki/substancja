import React from 'react';
import ReactDOM from 'react-dom';

export class Portfolio extends React.Component{


  render() {
  if(this.props.page !== "Portfolio")
  return null;

  return <div className="header2"> Portfolio<img src="./img/promocja.jpg"/></div>

  }


}
