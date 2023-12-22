import { ReactComponent as CheckIcon } from '../../assets/icons/checkIcon.svg';

import './TourIncludedItemRow.scss';

const ServiceItem = ({ content }) => {
  return (
    <div className='service-item-container'>
      <CheckIcon />
      <span>{content}</span>
    </div>
  );
};

const TourIncludedItemRow = ({ rowName, rowContent }) => {
  return (
    <div className='tour-included-item-row'>
      <span className='row-name'>{rowName}</span>
      {rowName === 'Services' ? (
        <div className='services-container'>
          {rowContent.map(contentItem => <ServiceItem key={contentItem} content={contentItem} />)}
        </div>
      ) : <span>{rowContent}</span>}
    </div>
  );
};

export default TourIncludedItemRow;
