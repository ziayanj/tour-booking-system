import { useCallback, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import TourDeleteModal from "../TourDeleteModal/TourDeleteModal";

import { ReactComponent as PriceIcon } from '../../assets/icons/priceIcon.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clockIcon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';
import miamiImage from '../../assets/images/miami.png';

import { calculateDaysToDate } from "../../utils/helpers";

import './TourCardContent.scss';

const TourCardContent = ({ cardData, bookingId }) => {
  const navigate = useNavigate();
  const { id, name, description, price, time, startDate } = cardData;

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [tourDaysLeft, setTourDaysLeft] = useState();

  const handleDelete = useCallback(() => {
    setTourDaysLeft(calculateDaysToDate(startDate));
    setIsDeleteModalOpen(true);
  }, [startDate]);

  return (
    <div className="tour-card-content">
      <img src={miamiImage} alt="miami" className="tour-image" />
      <div className="tour-details">
        <h5>{name}</h5>
        <p className="tour-description">
          {description}
        </p>
        <div className={bookingId ? `tour-info booked-info` : 'tour-info'}>
          <span className="tour-price"><PriceIcon /> {price}</span>
          <span className="tour-time"><ClockIcon /> {time}</span>
        </div>
        {bookingId ? (
          <div className="booked-tour-actions">
            <TourDeleteModal
              title={name}
              bookingId={bookingId}
              modalOpen={isDeleteModalOpen}
              setModalOpen={setIsDeleteModalOpen}
              tourDaysLeft={tourDaysLeft}
            />
            <DeleteIcon onClick={handleDelete} />
            <Button onClick={() => navigate(`/tours/${id}`)} type="primary" className="danger-btn card-details-btn">
              Details
            </Button>
            <Button onClick={() => navigate(`/bookings/${bookingId}`)} type="primary" className="danger-btn card-details-btn">
              Update
            </Button>
          </div>
        ) : (
          <Button type="primary" className="danger-btn card-details-btn">
            View Details
          </Button> 
        )}
      </div>
    </div>
  );
};

export default TourCardContent;
