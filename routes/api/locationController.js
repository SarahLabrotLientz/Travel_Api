const express = require("express");
const router = express.Router();
const { Location,Traveller,Trip } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  Location.create({
    location_name: req.body.name
  })
    .then(newLocation => {
      res.json(newLocation);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occured", err: err });
    });
});

router.get('/:id', async (req, res) => {
  // find one Location by its `id` value
  try {
    const locationData = await Location.findByPk(req.params.id);

    if (!locationData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    Location.destroy({
      where:{
          id:req.params.id
      }
  }).then(delLocation=>{
      res.json(delLocation)
  })
});

module.exports = router;