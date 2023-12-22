import { DatePicker, Input, Select } from 'antd';

import { ReactComponent as LocationIcon } from '../../assets/icons/locationIcon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendarIcon.svg';
import { ReactComponent as PriceIcon } from '../../assets/icons/priceIcon.svg';

import priceRanges from '../../utils/priceRanges';

import './TourQuery.scss';

const TourQuery = ({ type, bordered, setValue }) => {
  const getQueryText = () => {
    switch(type) {
      case 'location':
        return 'location';
      case 'date':
        return 'choose date';
      case 'price':
        return 'price range';
      default:
        return null;
    }
  };

  const getQueryElem = () => {
    const { RangePicker } = DatePicker;

    switch(type) {
      case 'location':
        return <Input type="text" placeholder='Where you want to go?' onChange={(e) => setValue(e.target.value)} />;
      case 'date':
        return <RangePicker format="MM-DD-YYYY" onChange={(_, value) => setValue(value)} />;
      case 'price':
        return (
          <Select
            className="price-selector"
            placeholder="Choose Here"
            onChange={setValue}
            options={priceRanges}
          />
        );
      default:
        return null;
    }
  };

  const getQueryIcon = () => {
    switch(type) {
      case 'location':
        return <LocationIcon />;
      case 'date':
        return <CalendarIcon />;
      case 'price':
        return <PriceIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={bordered ? "query-item query-separator" : "query-item"}>
      {getQueryIcon()}
      <div className="query-content">
        <span className="query-text">
          {getQueryText()}
        </span>
        <span className="query-element">
          {getQueryElem()}  
        </span>
      </div>
    </div>
  );
};

export default TourQuery;
