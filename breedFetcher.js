const request = require('request');

const breed = process.argv[2];
const breedsAPI = 'https://api.thecatapi.com/v1/breeds/search';
const callQuery = `${breedsAPI}?q=${breed}`;

request(callQuery, (err, response, body) => {
  if (err) {
    console.log(err);
    console.log();
    console.log(`ERROR:: Requested hostname: ${err.hostname}. Full error message above.`);
  } else if (body === `[]`) {
    console.log(`ERROR:: Requested breed not found: '${breed}'.\nUsage: \`node breedFetcher.js [breed]\``);
  } else {
    const data = JSON.parse(body);
    // console.log('data:::', data);
    console.log(`body.length:::`, body.length);
    console.log(data[0].name, ',',data[0].origin);
  }
});