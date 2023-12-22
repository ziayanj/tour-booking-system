import { Link } from "react-router-dom";

import TourCardContent from "../TourCardContent/TourCardContent";

import './TourCard.scss';

const TourCard = ({ cardData, bookingId }) => {
  return (
    <div className="tour-card-container">
      {bookingId ? (
        <TourCardContent cardData={cardData} bookingId={bookingId} />
      ) : (
        <Link to={`${cardData.id}`}>
          <TourCardContent cardData={cardData} />
        </Link>
      )}
    </div>
  );
};

export default TourCard;
