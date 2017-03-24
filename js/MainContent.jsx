  import React from 'react';
  import ReactDOM from 'react-dom';

  export class Main extends React.Component{


    render() {
      if(this.props.page !== "Main")
      return null;
      return <div>
      <div className="container">

        <article>Druk wielkoformatowy Nasza drukarnia wielkoformatowa specjalizuje się w różnego rodzaju stojakach reklamowych typu roll up, ścankach POP-UP oraz innych produktach gdzie ważna jest przede wszystkim jakość druku. Oczywiście produkujemy także banery reklamowe, naklejki oraz plakaty. Drukujemy na sprzęcie marki Roland o maksymalnej rozdzielczości 1440 dpi. Zawsze korzystamy z wysokich rozdzielczości i odpowiednich profili kolorystycznych, dzięki czemu uzyskujemy fotograficzną jakość wydruków oraz eliminujemy wszelakie wady, jak choćby paskowanie itp..
        </article>
        <article>Druk w małym formacie W zależności od nakładów, terminów realizacji oraz możliwości technologicznych wykorzystujemy druk cyfrowy lub offsetowy. Drukujemy szeroką paletę produktów takich jak: ulotki, wizytówki, foldery, kalendarze itp. Posiadamy również profesjonalny sprzęt introligatorski pozwalający na estetyczne wykańczanie prac.
        </article>
        <article>Studio reklamy Do wszystkich naszych produktów oferujemy możliwość stworzenia indywidualnego projektu. Więcej szczegółów w zakładce Projekty. Działamy także jak klasyczna agencja reklamowa więc nie ograniczamy się tylko do produktów które sami bezpośrednio produkujemy. Możesz nam zlecić stworzenie i przeprowadzenie całej kampanii reklamowej lub po prostu oszczędzić czas i zamówić cały wachlarz produktów związanych z reklamą w jednym miejscu a nie zlecać je w wielu różnych firmach.</article>


    </div>
    <div className="header2"> <img src="./img/promocja.jpg"/></div>
    
    </div>

    }


  }
