import React, { useState } from 'react';
import { ApartmentCard } from '../components/ApartmentCard';
import { Navbar } from '../components/Navbar';

const MainPage = () => {
  const [apartments, setApartments] = useState([]);

  if (!apartments) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <Navbar setApartments={setApartments} />
      <div className="flex flex-wrap gap-4">
        {apartments.map((apartment) => (
          <ApartmentCard apartment={apartment} key={apartment._id} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
