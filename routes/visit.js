const Visit = require("../models/Visit");

const router = require("express").Router();

// CREATE

router.post("/add",  async (req, res) => {
  const newVisit = new Visit(req.body);
  try {
    const savedVisit = await newVisit.save();
    res.status(200).json(savedVisit);
  } catch (err) {
    res.status(500).json("YOU GOT AN ERROR LOL!!!" + err);
  }
});

// GET

router.get("/", async (req, res) => {
  try {
    const Visits = await Visit.find();
    res.status(200).json(Visits);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;