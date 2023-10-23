const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '..', 'data', 'restuarant.json')

function getStoredRestaurants(params) {

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants
}

function storeRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  storedRestaurants: storeRestaurants,
}
// {이름바꿔도됨:위에함수이름}