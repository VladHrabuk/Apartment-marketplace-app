import { Trash2 } from 'lucide-react';
import { Button } from './Button';
import { DeleteModal } from '../modals/DeleteModal';
import { useState } from 'react';

export const DeleteButton = ({ apartment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };
  return (
    <>
      <Button
        icon={<Trash2 size={16} />}
        isIconOnly
        variant="destructive"
        onClick={toggleOpen}
      />
      <DeleteModal
        toggleModal={toggleOpen}
        isOpen={isOpen}
        apartment={apartment}
      />
    </>
  );
};
