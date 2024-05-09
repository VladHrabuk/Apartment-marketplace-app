import axios from 'axios';

export default class ApartmentService {
  static async getAllApartments({ rooms, price }) {
    try {
      const response = await axios.get(
        'https://apartment-marketplace-app.onrender.com/apartments',
        {
          params: {
            rooms,
            price,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Internal error: GET_ALL_APARTMENTS', error);
      throw error;
    }
  }
  static async deleteApartment(id) {
    try {
      const response = await axios.delete(
        `https://apartment-marketplace-app.onrender.com/apartments/${id}`
      );
      return response.data;
    } catch (error) {
      console.error('Internal error: DELETE_APARTMENT', error);
      throw error;
    }
  }

  static async createApartment(apartment) {
    try {
      const response = await axios.post(
        'https://apartment-marketplace-app.onrender.com/apartments',
        apartment
      );
      return response.data;
    } catch (error) {
      console.error('Internal error: POST_APARTMENT', error);
      throw error;
    }
  }

  static async editApartment(apartment, id) {
    try {
      const response = await axios.put(
        `https://apartment-marketplace-app.onrender.com/apartments/${id}`,
        apartment
      );
      return response.data;
    } catch (error) {
      console.error('Internal error: PUT_APARTMENT', error);
      throw error;
    }
  }
}
