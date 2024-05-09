import { useForm } from 'react-hook-form';
import Modal from './Modal';
import { Input } from '../Input';
import {
  maxLengthValidation,
  minLengthValidation,
  minMaxValueValidation,
  minValueValidation,
  requiredValidation,
} from '../../utils/validations';
import ApartmentService from '../../api/ApartmentService';

export const ApartmentForm = ({ isOpen, toggleModal, apartment }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: apartment ? apartment.name : '',
      price: apartment ? apartment.price : null,
      rooms: apartment ? apartment.rooms : null,
      description: apartment ? apartment.description : '',
    },
  });

  const handleAddApartment = (data) => {
    console.log(data);
    if (apartment) {
      ApartmentService.editApartment(data, apartment._id)
        .then((response) => {
          console.log('Apartment updated successfully:', response);
          reset();
          toggleModal();
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error editing apartment:', error);
        });
    } else {
      ApartmentService.createApartment(data)
        .then((response) => {
          console.log('Apartment added successfully:', response);
          reset();
          toggleModal();
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error adding apartment:', error);
        });
    }
  };

  const body = (
    <div className={'flex flex-col gap-2'}>
      <Input
        id="name"
        label="Name"
        placeholder="Country house..."
        register={register}
        errors={errors}
        type="text"
        validationOptions={{
          ...requiredValidation,
          ...minLengthValidation(3),
          ...maxLengthValidation(99),
        }}
      />
      <div className="flex flex-row gap-2">
        <Input
          id="rooms"
          label="Rooms"
          register={register}
          errors={errors}
          type="number"
          validationOptions={{
            ...requiredValidation,
            ...minMaxValueValidation(1, 20),
          }}
        />
        <Input
          id="price"
          label="Price"
          register={register}
          errors={errors}
          type="number"
          validationOptions={{
            ...requiredValidation,
            ...minValueValidation(1),
          }}
        />
      </div>
      <Input
        id="description"
        label="Description"
        placeholder="This apartment is situated in the city center..."
        register={register}
        errors={errors}
        validationOptions={{
          ...requiredValidation,
          ...maxLengthValidation(999),
        }}
        isTextArea
        required
      />
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      title={!apartment ? 'Add new apartment' : 'Edit apartment'}
      body={body}
      actionLabel={!apartment ? 'Add' : 'Confirm'}
      onSubmit={handleSubmit(handleAddApartment)}
      toggleModal={toggleModal}
    />
  );
};
