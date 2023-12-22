import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import TourCard from '../../components/TourCard/TourCard';
import EmptyResults from '../../components/EmptyResults/EmptyResults';

import { ReactComponent as FiltersIcon } from '../../assets/icons/filtersIcon.svg';
import { getAvailableTours } from '../../services/toursService';

import './AllToursPage.scss';

const AllToursPage = () => {
  const [tours, setTours] = useState([]);
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');

  useEffect(() => {
    const params = {
      location,
      date: searchParams.get('date'),
      price: searchParams.get('price'),
    };

    getAvailableTours(params)
      .then(data => setTours(data))
      .catch(err => console.error(err));
  }, [searchParams, location]);

  return (
    <div className='all-tours-page'>
      <div className='filters-row'>
        <h2 className='tour-header'>
          {!!location ? `Top Destinations At "${location}"` : ""} 
        </h2>
        {!!tours.length && (
          <span className='filters-pill'>
            <FiltersIcon /> Filters
          </span>
        )}
      </div>
      {!!tours.length ? (
        <div className="tours-container">
          {tours.map(tour => <TourCard key={tour.id} cardData={tour} />)}
        </div>
      ) : (
        <div className='no-results'>
          <EmptyResults searchText={location} />
        </div>
      )}
    </div>
  );
};

export default AllToursPage;
