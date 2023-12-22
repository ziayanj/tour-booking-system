const express = require('express');
const router = express.Router();

const toursData = require('../seedData/tours');
const popularLocations = require('../seedData/popularLocations');

router.get('/', (req, res) => {
  let data = toursData;

  const { location, date, price } = req.query;

  if (location) {
    data = data.filter(({ destination }) => destination.match(new RegExp(location, 'i')));
  }

  if (date) {
    const paramDates = date.split(',');
    const startDate = new Date(paramDates[0]);
    const endDate = new Date(paramDates[1]);

    data = data.filter((item) => {
      const tourDate = new Date(item.startDate);

      return tourDate >= startDate && tourDate <= endDate;
    });
  }

  if (price) {
    const [minPrice, maxPrice] = price.split('-');

    data = data.filter(({ price }) => {
      const [tourMinPrice, tourMaxPrice] = price.split('-').map(x => parseFloat(x.replace(/\$/g, '')));

      if (maxPrice) {
        return tourMinPrice >= minPrice && tourMaxPrice <= maxPrice;
      }

      return tourMinPrice >= minPrice;

    });
  }

  res.json(data);
});

router.get('/popular', (req, res) => {
  res.json(popularLocations);
});

router.get('/:id', (req, res) => {
  const tour = toursData.find(tour => tour.id === req.params.id);

  if (!tour) {
    res.status(404).json({ error: 'Tour not found' });
  } else {
    res.json(tour);
  }
});

module.exports = router;
