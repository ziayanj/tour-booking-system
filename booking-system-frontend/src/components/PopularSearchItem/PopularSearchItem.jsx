import { useNavigate } from "react-router-dom";

import './PopularSearchItem.scss';

const PopularSearchItem = ({ itemText }) => {
  const navigate = useNavigate();

  const handlePopularSearchClick = () => {
    navigate(`/tours?location=${itemText}`);
  }

  return (
    <div className="search-item-container" onClick={handlePopularSearchClick}>
      <span>{itemText}</span>
    </div>
  );
};

export default PopularSearchItem;
