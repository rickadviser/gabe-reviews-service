const faker = require('faker');
const { generateNum } = require('./helpers');

const generateUsersData = n => {
  const users = [];

  const generateName = () => {
    const name = {};
    name.first_name = faker.name.firstName();
    name.last_name = faker.name.lastName();
    return name;
  };

  const generateLocation = () => {
    const location = {};
    location.city = faker.address.city();
    location.state = faker.address.state();
    return location;
  };

  for (let i = 0; i < n; i++) {
    const user = {};
    user.username = faker.internet.userName();
    user.name = generateName();
    user.location = generateLocation();
    user.contributions = generateNum(50);
    user.helpful_votes = generateNum(100);
    users.push(user);
  }

  return users;
};

module.exports = generateUsersData;
