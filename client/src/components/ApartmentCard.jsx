import { EditButton } from './buttons/EditButton';
import { DeleteButton } from './buttons/DeleteButton';

export const ApartmentCard = ({ apartment }) => {
  return (
    <div className="w-80 p-4 border rounded-2xl flex flex-row justify-between">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{apartment.name}</h2>
        <div className="space-x-2 pt-4">
          <span
            className={
              'px-3 py-1 rounded-full text-sm font-medium bg-black text-white'
            }
          >
            🏡 {apartment.rooms}
          </span>
          <span
            className={
              'px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600'
            }
          >
            $ {apartment.price}
          </span>
        </div>
        <p className="text-sm text-gray-800">{apartment.description}</p>
      </div>
      <div className="ml-3 space-y-2">
        <EditButton apartment={apartment} />
        <DeleteButton apartment={apartment} />
      </div>
    </div>
  );
};
