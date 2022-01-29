const express = require("express");
const router = express.Router();
const { Location,Traveller,Trip } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  Traveller.create({
    Traveller_name: req.body.name
  })
    .then(newTraveller => {
      res.json(newTraveller);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occured", err: err });
    });
});

router.get('/:id', async (req, res) => {
  // find one Traveller by its `id` value
  try {
    const travellerData = await Traveller.findByPk(req.params.id);

    if (!travellerData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    Traveller.destroy({
      where:{
          id:req.params.id
      }
  }).then(delTraveller=>{
      res.json(delTraveller)
  })
});

module.exports = router;