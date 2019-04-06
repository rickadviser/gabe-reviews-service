const faker = require('faker');
const { generateNum } = require('./helpers');

const generateRoomTipsData = n => {
  const roomTips = [];

  for (let i = 0; i < n; i++) {
    const roomTip = {};
    roomTip.date = faker.date.past();
    roomTip.tip = faker.lorem.paragraph();
    roomTip.rating = generateNum(5);
    roomTips.push(roomTip);
  }

  return roomTips;
};

module.exports = generateRoomTipsData;
