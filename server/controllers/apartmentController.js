const Apartment = require('../models/apartment.model');
const ApiError = require('../exceptions/api-error');

async function getAllApartments(req, res, next) {
  try {
    const sortOptions = {};
    if (req.query.price === 'asc') {
      sortOptions.price = 1;
    } else if (req.query.price === 'desc') {
      sortOptions.price = -1;
    }

    const filterOptions = {};
    if (req.query.rooms) {
      filterOptions.rooms = parseInt(req.query.rooms);
    }

    const apartments = await Apartment.find(filterOptions).sort(sortOptions);
    const totalCount = await Apartment.countDocuments(filterOptions);
    return res.status(200).json({
      totalCount,
      data: {
        apartments,
      },
    });
  } catch (err) {
    next(err);
  }
}

async function getApartmentById(req, res, next) {
  try {
    const apartment = await Apartment.findById(req.params.id);
    res.status(200).json(apartment);
  } catch (err) {
    next(ApiError.notFound("Apartment with that id isn't found"));
  }
}

async function createApartment(req, res, next) {
  try {
    const { rooms, name, price, description } = req.body;
    const newApartment = await Apartment.create({
      rooms,
      name,
      price,
      description,
    });
    res.status(201).json(newApartment);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = Object.values(err.errors).map((error) => error.message);
      return res.status(400).json({ error: 'Validation Error', messages: validationErrors });
    }
    next(err);
  }
}

async function deleteApartment(req, res, next) {
  try {
    await Apartment.deleteOne({ _id: req.params.id });
    res.status(204).json(null);
  } catch (err) {
    next(ApiError.notFound("Apartment with that id isn't found"));
  }
}

async function updateApartment(req, res, next) {
  try {
    const { id } = req.params;
    const { rooms, name, price, description } = req.body;
    const updatedApartment = await Apartment.findByIdAndUpdate(
      id,
      { rooms, name, price, description },
      { new: true, runValidators: true }
    );
    if (!updatedApartment) {
      return next(ApiError.notFound("Apartment with that id isn't found"));
    }
    res.status(200).json(updatedApartment);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = Object.values(err.errors).map((error) => error.message);
      return res.status(400).json({ error: 'Validation Error', messages: validationErrors });
    }
    next(err);
  }
}

module.exports = {
  createApartment,
  getAllApartments,
  getApartmentById,
  deleteApartment,
  updateApartment,
};
