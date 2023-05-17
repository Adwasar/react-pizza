import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaBlock title="Чизбургер-пицца" price="149" />
              <PizzaBlock title="Чизбургер-пицца" price="149" />
              <PizzaBlock title="Чизбургер-пицца" price="149" />
              <PizzaBlock title="Чизбургер-пицца" price="149" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
