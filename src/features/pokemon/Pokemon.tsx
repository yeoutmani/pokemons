import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    fetchPokemon
  } from '../../services/pokemonAPI';
/*import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';*/

export function Pokemon() {
  /*const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
*/
//const layers = await fetchPokemon();
const [PokemonItems, setPokemonItems] = useState( {"next":"10"});

useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetchPokemon();
      //console.log(response)
      setPokemonItems(response)
      // ...
    }
    fetchData();
  }, []);

  return (
    <div>
      {PokemonItems.next}
    </div>
  );
}