const express = require('express');

const router = express.Router();

const {
  createTour,
  deleteTour,
  getAllTours,
  getTour,
  updateTour,
  checkID,
  checkBody,
} = require('./../controllers/tourController');

//middleware for a specific param.
router.param('id', checkID);

router.route('/').get(getAllTours).post(checkBody, createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
