import React from 'react';
import ReactDOM from 'react-dom';


export class ArticleTwo extends React.Component {


constructor(props) {
  super(props);
  this.state = {
    arcticleOne: true
  }
}
art1back = () => {
this.setState({
  articleOne: false
})
}
art2back = () => {
this.setState({
  articleOne: true
})
}

render() {
if(this.state.articleOne === true)
{ return   <div className="rotate" onClick={this.art1back}>
  <article className="articleOne back">
      <img src="./img/2a.png"/>
      <h2>Druk w małym formacie</h2><br/>
      <h3>Ulotki</h3><br/>
      <h3>Wizytówki</h3><br/>
      <h3>Foldery</h3><br/>
      <h3>Kalendarze</h3><br/>
      <h3>Teczki</h3><br/>
      <h3>Papier firmowy</h3><br/>
      <h3>Etykiety</h3><br/>
      <p>Dowiedz się więcej</p>

  </article>
  <article className="articleOne front">
      <img src="./img/2a.png"/>
      <h2>Druk w małym formacie</h2><br/>
      W zależności od nakładów, terminów realizacji oraz możliwości technologicznych wykorzystujemy druk cyfrowy lub offsetowy. Drukujemy szeroką paletę produktów takich jak: ulotki, wizytówki, foldery, kalendarze itp. Posiadamy również profesjonalny sprzęt introligatorski pozwalający na estetyczne wykańczanie prac.

  </article>
</div>
} else {
  return   <div className="rotate" onClick={this.art2back}>
    <article className="articleOne front">
        <img src="./img/2a.png"/>
        <h2>Druk w małym formacie</h2><br/>
        <h3>Ulotki</h3><br/>
        <h3>Wizytówki</h3><br/>
        <h3>Foldery</h3><br/>
        <h3>Kalendarze</h3><br/>
        <h3>Teczki</h3><br/>
        <h3>Papier firmowy</h3><br/>
        <h3>Etykiety</h3><br/>
        <p>Dowiedz się więcej</p>

    </article>
    <article className="articleOne back">
        <img src="./img/2a.png"/>
        <h2>Druk w małym formacie</h2><br/>
        W zależności od nakładów, terminów realizacji oraz możliwości technologicznych wykorzystujemy druk cyfrowy lub offsetowy. Drukujemy szeroką paletę produktów takich jak: ulotki, wizytówki, foldery, kalendarze itp. Posiadamy również profesjonalny sprzęt introligatorski pozwalający na estetyczne wykańczanie prac.

    </article>
  </div>
}
}

}