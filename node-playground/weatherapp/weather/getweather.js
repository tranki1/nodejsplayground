var request = require('request');

const getweather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/088f05b2a9cd568104d9cf346213563a/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback(`can't connect forecast server`);
      } else if (!error && response.statusCode === 400) {
        callback('unable to fetch data');
      } else if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
    }
  );
};

module.exports.getweather = getweather;
