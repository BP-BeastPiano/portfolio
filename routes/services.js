const Services = require("../models/Services");
const {
  verifyTokenAndAdmin,  
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/add", verifyTokenAndAdmin, async (req, res) => {
  const newServices = new Services(req.body);
  try {
    const savedServices = await newServices.save();
    res.status(200).json(savedServices);
  } catch (err) {
    res.status(500).json("YOU GOT AN ERROR LOL!!!" + err);
  }
});

// GET ALL

router.get("/", async (req, res) => {
  try {
    const Servicess = await Services.find();
    res.status(200).json(Servicess);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedServices = await Services.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedServices);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Services.findByIdAndDelete(req.params.id);
    res.status(200).json("Services has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;