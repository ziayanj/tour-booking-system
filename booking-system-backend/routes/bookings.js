const express = require('express');
const router = express.Router();

const toursData = require('../seedData/tours');
const bookingsData = require('../seedData/bookings');

router.get('/', (req, res) => {
  const response = [];

  bookingsData.forEach((booking) => {
    const tourData = toursData.find(({ id }) => id === booking.tour_id);
    response.push({ bookingData: booking, tourData: tourData });
  })

  res.json(response);
});

router.post('/', (req, res) => {
  const { name, email, phone, numAdults, numChildren, paymentMethod, tourId } = req.body;

  if (toursData.find(({ id }) => id === tourId)) {
    bookingsData.push({
      name,
      email,
      phone,
      numAdults,
      numChildren,
      paymentMethod,
      tour_id: tourId,
      id: crypto.randomUUID(),
    });

    res.sendStatus(200);
    return; 
  }

  res.status(400).json({ error: 'Invalid tour id' });
});

router.get('/:id', (req, res) => {
  const booking = bookingsData.find(booking => booking.id === req.params.id);

  if (!booking) {
    res.status(404).json({ error: 'Booking not found' });
  } else {
    res.json(booking);
  }
});

router.put('/:id', (req, res) => {
  const bookingIndex = bookingsData.findIndex(booking => booking.id === req.params.id);

  if (bookingIndex === -1) {
    res.status(404).json({ error: 'Booking not found' });
    return;
  }

  bookingsData[bookingIndex] = { ...bookingsData[bookingIndex], ...req.body };

  res.json(bookingsData[bookingIndex]);
});

router.delete('/:id', (req, res) => {
  const bookingIndex = bookingsData.findIndex(booking => booking.id === req.params.id);

  if (bookingIndex === -1) {
    res.status(404).json({ error: 'Booking not found' });
    return;
  }

  bookingsData.splice(bookingIndex, 1);

  res.sendStatus(200);
});

module.exports = router;
