import React from 'react';
import ReactDOM from 'react-dom';

export class More extends React.Component{


  render() {
  if(this.props.page !== "More")
  return null;

  return <div className="more">
    <h2>15.03.2016</h2>
    <p>A oto filmik z oklejonego przez nas ośrodka szoleniowego Akademi Altkom.<br />
Udekorowaliśmy go m.in. w wiele ciekawych grafik ściennych, wyciętych z kolorowej <br />
folii oraz obrazów nadrukowanych na płytach PVC.<br />
A oto efekt :)


    </p><br />

  <p>   <iframe src="https://www.youtube.com/embed/uoP-ro_PReY" frameBorder="0" allowFullScreen></iframe></p>
    <h2>21.01.2015</h2>
    <h2>Zmieniamy nasze logo :)</h2>
    <p>W zwiąku z tym, że pragniemy ciągle się rozwijać i udoskonalać działalność naszej firmy, postanowiliśmy trochę odświeżyć nasz logotyp. Teraz będzie bardziej kolorowy i mamy nadzieję, że będzie się Wam bardziej podobał. <br />
      A oto nasze nowe logo:</p>
    <p><img src="img/logo.png" width="300" height="110" alt="logo" /><br />
      <br />
    </p>
    <h2>29.11.2013</h2>


        <h2>Substancja na czarnym lądzie!</h2>

        <p> Naszym ostatnim osiągnięciem jest nawiązanie współpracy z <strong>Fundacją Kasisi</strong> założoną przez Szymona Hołownię. Jest to Fundacja, która pomaga opiekować  się domem dziecka w Zambii.<br />
          <br />
          Jednym z ich ostatnich projektów jest <strong>zakup ambulansu</strong> dla sierocińca.  Dzięki niemu chore dzieci mogą szybko dotrzeć do szpitala po wyboistych zambijskich drogach.<br />
          <br />
          My dołożyliśmy swoją cegiełkę do tego szlachetnego przedsięwzięcia. Zaprojektowaliśmy i wydrukowaliśmy <strong>naklejki na ambulans</strong>, dzięki czemu jest on dobrze oznakowany i widoczny. Teraz nawet lwy przed nim uciekają :)<br />
          <br />
          Staramy się też pomagać przy realizacji kolejnych projektów, do czego i  Was zachęcamy! <br />
        Więcej szczegółów na stronie <a href="http://www.fundacjakasisi.pl/" rel="nofollow" target="_blank">www.fundacjakasisi.pl</a></p><br/><br />
      <iframe src="https://www.youtube.com/embed/_avrHRefwi4" frameBorder="0" allowFullScreen></iframe>
</div>

  }


}
