import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../buttons/Button';
const Modal = ({ isOpen, onSubmit, title, body, actionLabel, toggleModal }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 text-gray-600">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          <div
            className={`translate duration-300 h-full
                ${showModal ? 'translate-y-0' : 'translate-y-full'}
                ${showModal ? 'opacity-100' : 'opacity-0'}
              `}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-2xl shadow-l relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center px-6 py-4 rounded-t justify-center relative border-b-[1px]">
                <div className={'absolute right-6'}>
                  <Button
                    onClick={toggleModal}
                    isIconOnly
                    icon={<X size={16} />}
                  />
                </div>
                <div className="text-lg font-bold text-black">{title}</div>
              </div>
              <div className="relative px-6 py-4 flex-auto max-h-[400px] overflow-y-auto">
                {body}
              </div>
              <div className="flex flex-col px-6 py-4">
                <Button
                  onClick={onSubmit}
                  variant={'primary'}
                  text={actionLabel}
                  full
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
