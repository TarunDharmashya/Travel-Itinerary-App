const Itinerary = require('../models/Itinerary');

const createItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.create({ ...req.body, userId: req.user.id });
    res.json(itinerary);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getItineraries = async (req, res) => {
  const itineraries = await Itinerary.find({ userId: req.user.id });
  res.json(itineraries);
};

const getItinerariesById = async (req, res) => {
  const itineraries = await Itinerary.findOne({ _id: req.params.id });
  res.json(itineraries);
};

const updateItinerary = async (req, res) => {
  const itinerary = await Itinerary.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(itinerary);
};

const deleteItinerary = async (req, res) => {
  await Itinerary.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ message: 'Deleted' });
};

module.exports={
  createItinerary,
  getItineraries,
  getItinerariesById,
  updateItinerary,
  deleteItinerary
}