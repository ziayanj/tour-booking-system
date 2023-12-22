import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import IteneraryCard from '../IteneraryCard/IteneraryCard';

import './TourItenerary.scss';

const TourItenerary = ({ tourId, iteneraryItems }) => {
  const navigate = useNavigate();

  const bookTour = () => {
    navigate(`/bookings/new?tour_id=${tourId}`);
  };

  return (
    <div className='tour-itenerary-container'>
      <h2 className='tour-header'>Itenerary schedule</h2>
      <div className='itenerary-cards-container'>
        {iteneraryItems.map(item => <IteneraryCard key={item.day} iteneraryData={item} />)}
      </div>
      <div className="book-btn-container">
        <Button type="primary" className="tour-book-btn" onClick={bookTour}>
          Book Now
        </Button> 
      </div>
    </div>
  );
};

export default TourItenerary;
