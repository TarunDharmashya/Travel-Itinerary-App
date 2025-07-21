const express = require('express');
const auth = require('../middleware/auth');
const {
  createItinerary,
  getItineraries,
  getItinerariesById,
  updateItinerary,
  deleteItinerary
} = require('../controllers/ItineraryController');

const router = express.Router();

router.use(auth);
router.post('/', createItinerary);
router.get('/', getItineraries);
router.get('/:id', getItinerariesById);
router.put('/:id', updateItinerary);
router.delete('/:id', deleteItinerary);

module.exports = router;