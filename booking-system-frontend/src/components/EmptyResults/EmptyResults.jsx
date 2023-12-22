import { ReactComponent as EmptyResultsIcon } from '../../assets/icons/emptyResultsIcon.svg';

import './EmptyResults.scss';

const EmptyResults = ({ searchText }) => {
  return (
    <div className='empty-results-container'>
      <EmptyResultsIcon />
      <p className='empty-results-content'>
        Sorry, we didn't find any tour right now {!!searchText && `at "${searchText}"`}
      </p>
    </div>
  );
};

export default EmptyResults;
