import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PopularSearchItem from "../../components/PopularSearchItem/PopularSearchItem";
import TourQuery from "../../components/TourQuery/TourQuery";

import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import backgroundImage from '../../assets/images/background.png';
import { getPopularLocations } from "../../services/toursService";

import './HomePage.scss';

const HomePage = () => {
  const navigate = useNavigate();
  const [popularLocations, setPopularLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    getPopularLocations()
      .then(data => setPopularLocations(data))
      .catch(err => console.error(err));
  }, []);

  const handleSearch = () => {
    if (!location && !date && !price) {
      return;
    }

    let navigateTo = '/tours?';

    if (location) {
      navigateTo += `location=${location}&`;
    }

    if (date) {
      navigateTo += `date=${date}&`;
    }

    if (price) {
      navigateTo += `price=${price}`;
    }

    navigate(navigateTo);
  };

  return (
    <div className="home-page">
      <img className="background" src={backgroundImage} alt="bg-img" />
      <div className="home-page-content">
        <TourQuery setValue={setLocation} type="location" />
        <TourQuery setValue={setDate} type="date" bordered />
        <TourQuery setValue={setPrice} type="price" bordered />
        <Button className="danger-btn search-btn" onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </div>
      <div className="popular-search-container">
        {!!popularLocations.length && (
          <>
            <h2 className="popular-search">Popular Destinations</h2>
            <div className="popular-search-items">
              {popularLocations.map(location => <PopularSearchItem key={location} itemText={location} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
