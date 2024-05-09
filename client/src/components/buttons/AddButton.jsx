import { useState } from 'react';
import { Button } from './Button';
import { Plus } from 'lucide-react';
import { ApartmentForm } from '../modals/ApartmentForm';

export const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };
  return (
    <>
      <Button
        icon={<Plus size={16} />}
        text="Add apartment"
        onClick={toggleOpen}
        variant="primary"
      />
      <ApartmentForm isOpen={isOpen} toggleModal={toggleOpen} />
    </>
  );
};
