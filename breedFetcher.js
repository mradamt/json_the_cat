const request = require('request');

const breed = 'sib';
const breedsAPI = 'https://api.thecatapi.com/v1/breeds/search';
const callQuery = `${breedsAPI}?q=${breed}`;

request(callQuery, (err, response, body) => {
  if (err) throw err;
  // console.log(body)
  // console.log(typeof body)
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});