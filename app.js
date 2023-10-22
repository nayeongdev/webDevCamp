const fs = require('fs');
const path = require('path');

const express = require('express');
const uuid = require('uuid');

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index');
});  // localhost:3000/

app.get('/restaurants', function (req, res) {
  const filePath = path.join(__dirname, 'data', 'restuarant.json')

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render('restaurants', { numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants });
});  // localhost:3000/resturants

app.get('/restaurants/:id', function (req, res) {
  const restaurantId = req.params.id;
  const filePath = path.join(__dirname, 'data', 'restuarant.json')

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render('restaurants-detail', { restaurant: restaurant });
    }
  }

  res.render('404');
});

app.get('/recommend', function (req, res) {
  res.render('recommend');
});  // localhost:3000/recommend

app.post('/recommend', function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const filePath = path.join(__dirname, 'data', 'restuarant.json')

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect('/confirm');
})

app.get('/confirm', function (req, res) {
  res.render('confirm');
});  // localhost:3000/confirm

app.get('/about', function (req, res) {
  res.render('about');
});  // localhost:3000/about

app.listen(3000);