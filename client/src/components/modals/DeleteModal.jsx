import Modal from './Modal';
import ApartmentService from '../../api/ApartmentService';

export const DeleteModal = ({ isOpen, toggleModal, apartment }) => {
  const handleDeleteApartment = () => {
    ApartmentService.deleteApartment(apartment._id)
      .then((response) => {
        console.log('Apartment deleted successfully:', response);
        toggleModal();
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error deleting apartment:', error);
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      title={`Are you sure want to delete ${apartment.name}`}
      actionLabel={'Confirm'}
      onSubmit={handleDeleteApartment}
      toggleModal={toggleModal}
    />
  );
};
