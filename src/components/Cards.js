import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import delivery from '../images/verified-delivery.png';
import stock from '../images/customer-stock.png';
import report from '../images/report.png';
import plant from '../images/plant.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Vertkyg som underlättar verksamheten</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={stock}
              text='Glöm högarna med papper, ta fram saldon med några fingertryck.'
              label='Digitala kundsaldon'
              path='/funktioner/#saldo'
            />
            <CardItem
              src={delivery}
              text='Inga fler oklarheter kring antal levererade kärror, bekräfta leveranserna med digital signatur.'
              label='Bekräftade leveranser'
              path='/funktioner/#leverans'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={report}
              text='Överblick på tidigare leveranser gör det enklare att planera för framtiden.'
              label='Rapporter'
              path='/funktioner/#rapport'
            />
            <CardItem
              src={plant}
              text='Spara växtpassen digitalt för underlättad organisering.'
              label='Digitalt växtpass - kommer snart!'
              path='/funktioner/#pass'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;