import { ReactComponent as SunIcon } from '../../assets/icons/sunIcon.svg';
import { ReactComponent as CloudIcon } from '../../assets/icons/cloudIcon.svg';

import './IteneraryCard.scss';

const IteneraryCard = ({ iteneraryData }) => {
  return (
    <div className="itenerary-card-container">
      <div className='card-header'>
        <span>Day {iteneraryData.day}</span>
        <div className='card-weather'>
          {iteneraryData.forecast === 'sunny' ? <SunIcon /> : <CloudIcon />}
          <span className='day-weather'>
            {iteneraryData.temperature}<sup>&deg;</sup> C
          </span>
        </div>
      </div>
      <div className='card-content'>
        <ul>
          {iteneraryData.items.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default IteneraryCard;
