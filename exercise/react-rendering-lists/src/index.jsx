import React from 'react';
import ReactDOM from 'react-dom';
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const newPokedox = pokedex.map((props) =>
  <li>{props.name}</li>
);
ReactDOM.render(
  <ul>{newPokedox}</ul>,
  document.getElementById('root')
);

