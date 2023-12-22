import { useEffect, useState } from 'react';

import TourCard from '../../components/TourCard/TourCard';

import { getBookings } from '../../services/bookingsService';

import './MyToursPage.scss';

const MyToursPage = () => {
  const [bookingsData, setBookingsData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getBookings()
      .then(data => setBookingsData(data))
      .catch(_ => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <p>An error occurred</p>;
  }

  if (loading) {
    return <p>Loading bookings info...</p>;
  }

  return (
    <div className='my-tours-page'>
      <h2 className='tour-header'>My Tours</h2>
      <div className="my-tours-container">
        {bookingsData.map(item => (
          <TourCard key={item.bookingData.id} cardData={item.tourData} bookingId={item.bookingData.id} />
        ))}
      </div>
    </div>
  );
};

export default MyToursPage;
