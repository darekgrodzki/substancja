import React from 'react';
import ReactDOM from 'react-dom';

export class Contact extends React.Component{


  render() {
  if(this.props.page !== "Contact")
  return null;

  return <div className="header2"> Kontakt<img src="./img/promocja.jpg"/></div>

  }


}
