import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import TourIncludedItems from '../TourIncludedItems/TourIncludedItems';
import TourItenerary from '../TourItenerary/TourItenerary';

import { ReactComponent as LocationIcon } from '../../assets/icons/locationIcon.svg';
import { ReactComponent as PriceIcon } from '../../assets/icons/priceIcon.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clockIcon.svg';
import miamiImage from '../../assets/images/miami.png';
import { getTourDetails } from '../../services/toursService';

import './TourDetails.scss';

const TourDetails = () => {
  const { id } = useParams();
  
  const [tourDetails, setTourDetails] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getTourDetails(id)
      .then(data => setTourDetails(data))
      .catch(_ => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (error) {
    return <p>Invalid tour selected!</p>;
  }

  if (loading) {
    return <p>Loading tour details...</p>;
  }

  return (
    <div className='tour-details-container'>
      <h2 className='tour-header'>{tourDetails.name}</h2>
      <div className="tour-info">
        <span><LocationIcon /> {tourDetails.destination}</span>
        <span><PriceIcon /> {tourDetails.price}</span>
        <span><ClockIcon /> {tourDetails.time}</span>
      </div>
      <div className='tour-images'>
        <img className="main-image" src={miamiImage} alt="miami" />
        <div className='side-images'>
          <img src={miamiImage} className='side-image' alt="miami"  />
          <img src={miamiImage} className='side-image' alt="miami" />
          <img src={miamiImage} className='side-image' alt="miami" />
          <img src={miamiImage} className='side-image' alt="miami" />
        </div>
      </div>
      <p className='tour-description'>{tourDetails.description}</p>
      <TourIncludedItems tour={tourDetails} />
      <TourItenerary tourId={id} iteneraryItems={tourDetails.itenerary} />
    </div>
  );
};

export default TourDetails;
