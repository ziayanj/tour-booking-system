import { Modal } from "antd";
import { useNavigate } from 'react-router-dom';

import { deleteBooking } from "../../services/bookingsService";

import './TourDeleteModal.scss';

const TourDeleteModal = ({ modalOpen, setModalOpen, title, tourDaysLeft, bookingId }) => {
  const navigate = useNavigate();
  const deleteAllowed = tourDaysLeft > 3;

  const deleteItem = () => {
    setModalOpen(false);

    deleteBooking(bookingId)
      .then(_ => navigate('/'))
      .catch(_err => console.error('Error while deleting booking'));
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      className="delete-modal"
      title="Delete Tour"
      open={modalOpen}
      closable={false}
      onOk={deleteItem}
      onCancel={handleCancel}
      okText="Delete"
      okButtonProps={{ className: `modal-btn modal-ok-btn ${deleteAllowed ? '' : 'hidden'}` }}
      cancelButtonProps={{ className: 'modal-btn modal-cancel-btn' }} 
    >
      <p>
        {deleteAllowed ? (
          <>Are you sure to delete <strong>{title}</strong>?</>
        ) : (
          <>You can't delete <strong>{title}</strong> because there {tourDaysLeft === 1 ? 'is' : 'are' } only&nbsp;
          <strong>{tourDaysLeft} day{tourDaysLeft === 1 ? '' : 's'} remaining</strong> until beginning of this tour. </>
        )}
      </p>
    </Modal>
  );
};

export default TourDeleteModal;
