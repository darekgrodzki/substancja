import React from 'react';
import ReactDOM from 'react-dom';

export class More extends React.Component{


  render() {
  if(this.props.page !== "More")
  return null;

  return <div className="header2"> Substancja+<img src="./img/promocja.jpg"/></div>

  }


}
