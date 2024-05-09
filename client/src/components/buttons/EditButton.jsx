import { Pencil } from 'lucide-react';
import { Button } from './Button';
import { useState } from 'react';
import { ApartmentForm } from '../modals/ApartmentForm';

export const EditButton = ({ apartment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };
  return (
    <>
      <Button icon={<Pencil size={16} />} isIconOnly onClick={toggleOpen} />
      <ApartmentForm
        isOpen={isOpen}
        apartment={apartment}
        toggleModal={toggleOpen}
      />
    </>
  );
};
