const express = require('express');
const router = express.Router();
const {
  createApartment,
  getAllApartments,
  getApartmentById,
  deleteApartment,
  updateApartment,
} = require('../controllers/apartmentController');

router.route('/').get(getAllApartments).post(createApartment);

router.route('/:id').get(getApartmentById).delete(deleteApartment).put(updateApartment);

module.exports = {
  router,
};
