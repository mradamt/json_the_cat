const request = require('request');

const breedsAPI = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = function(breedName, callback) {
  const callQuery = `${breedsAPI}?q=${breedName}`;
  request(callQuery, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else if (body === `[]`) {
      const errorMsg = `ERROR:: Requested breed not found: '${breedName}'.\nUsage: \`node breedFetcher.js [breed]\``;
      callback(errorMsg, null);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };