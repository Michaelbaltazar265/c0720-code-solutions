/* eslint-disable no-console */

const firstApi = fetch('https://jsonplaceholder.typicode.com/users');
const jsonApi = firstApi.then(res => res.json());
jsonApi.then(res => console.log(res));

const secondApi = fetch('https://pokeapi.co/api/v2/pokemon/1');
const jsonApi2 = secondApi.then(res => res.json());
jsonApi2.then(res => console.log(res));
