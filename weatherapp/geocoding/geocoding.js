var request = require('request');

const geocodeAddress = (address, callback) => {
  const encodedAdress = encodeURIComponent(address);

  const apikey = 'AIzaSyBZ5KQfftvMwR-ClrhGmXKcyYQj_sIltbY';
  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apikey}&address=${encodedAdress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback(`Can't connect to google servers`);
      } else if (body.status === 'ZERO_RESULTS') {
        callback('No result for this address');
      } else if (body.status === 'OK') {
        callback({
          address: body.results[0].formatted_address,
          longitute: body.results[0].geometry.location.lng,
          latitude: body.results[0].geometry.location.lat
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
