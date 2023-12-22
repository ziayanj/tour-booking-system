import TourIncludedItemRow from "../TourIncludedItemRow/TourIncludedItemRow";

import './TourIncludedItems.scss';

const TourIncludedItems = ({ tour }) => {
  const itemsList = [
    { label: 'Destination', key: 'destination' },
    { label: 'Departure Location', key: 'departureLocation' },
    { label: 'Return', key: 'returnTime' },
    { label: 'Services', key: 'services' },
  ];

  return (
    <div className="tour-included-container">
      <h2 className='tour-header'>What's included</h2>
      <div>
        {itemsList.map(row => (
          <TourIncludedItemRow key={row.key} rowName={row.label} rowContent={tour[row.key]} />
        ))}
      </div>
    </div>
  );
};

export default TourIncludedItems;
