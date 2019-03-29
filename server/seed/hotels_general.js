const faker = require('faker');

const generateHotelsData = n => {
  const hotels = [];

  const generateHotelName = () => {
    const randomSuffixes = [
      'Hotel',
      'Inn',
      'Resort',
      'Lodge',
      'Deluxe',
      'Courtyard',
    ];

    return `${faker.address.city()} ${
      randomSuffixes[Math.floor(Math.random() * randomSuffixes.length)]
    }`;
  };

  const generateAddress = () => {
    const address = {};
    address.street = faker.address.streetAddress();
    address.city = faker.address.city();
    address.state = faker.address.state();
    address.zipcode = faker.address.zipCode();
    address.country = 'United States';
    return address;
  };

  const ranking = () => {
    const rankings = [];
    while (rankings.length < 100) {
      const randomRank = Math.floor(Math.random() * 100);
      if (!rankings.includes(randomRank)) {
        rankings.push(randomRank);
      }
    }
    return () => rankings.pop();
  };

  const generateRanking = ranking();

  const generateAirport = () => {
    const airport = {};
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let acronym = '';

    for (let i = 0; i < 3; i++) {
      acronym += possible[Math.floor(Math.random() * possible.length)];
    }

    const nearestMile = Number((Math.random() * 20).toFixed(2));

    airport.name = acronym;
    airport.nearest = nearestMile;
    airport.unit = 'miles';

    return airport;
  };

  for (let i = 0; i < n; i++) {
    const hotel = {};
    hotel.name = generateHotelName();
    hotel.address = generateAddress();
    hotel.description = faker.lorem.paragraph();
    hotel.walkable_score = Math.floor(Math.random() * 100);
    hotel.phone = faker.phone.phoneNumber();
    hotel.nearest_airport = generateAirport();
    hotel.url = 'http://hotel.com';
    hotel.ranking = generateRanking();
    hotel.stars = Math.round(Math.random() * 5);

    hotels.push(hotel);
  }

  return hotels;
};

module.exports = generateHotelsData;
