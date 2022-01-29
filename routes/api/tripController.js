const express = require("express");
const router = express.Router();
const { Location,Traveller,Trip } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const tripData = await Trip.findAll();
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      Trip_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Trip.create(req.body)
    .then((trip) => {
      
    });
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    Trip.destroy({
      where:{
          id:req.params.id
      }
  }).then(delTrip=>{
      res.json(delTrip)
  })
});

module.exports = router;