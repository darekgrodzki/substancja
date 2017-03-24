import React from 'react';
import ReactDOM from 'react-dom';

export class Offer extends React.Component{


  render() {
  if(this.props.page !== "Offer")
  return null;

  return <div className="header2"> Oferta<img src="./img/promocja.jpg"/></div>

  }


}
