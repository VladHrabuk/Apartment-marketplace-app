import { AddButton } from './buttons/AddButton';
import React from 'react';
import { useState, useEffect } from 'react';
import ApartmentService from '../api/ApartmentService';

export const Navbar = ({ setApartments }) => {
  const [rooms, setRooms] = useState(undefined);
  const [sortByPrice, setSortByPrice] = useState(undefined);

  useEffect(() => {
    ApartmentService.getAllApartments({ rooms, price: sortByPrice })
      .then((data) => {
        setApartments(data.data.apartments);
      })
      .catch((error) => {
        console.error('Error fetching data from server:', error);
      });
  }, [rooms, sortByPrice]);

  return (
    <nav className="px-16 pb-8 flex flex-row justify-between items-center">
      <div className="space-x-4">
        <select
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium"
        >
          <option value="">All Rooms</option>
          {[...Array(20).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Room(s)
            </option>
          ))}
        </select>
        <select
          value={sortByPrice}
          onChange={(e) => setSortByPrice(e.target.value)}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <AddButton />
    </nav>
  );
};
