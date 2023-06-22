const Getreviews = require("../models/Getreviews");
const {
  verifyTokenAndAdmin,  
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/add", async (req, res) => {
  const newReview = new Getreviews(req.body);
  try {
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (err) {
    res.status(500).json("YOU GOT AN ERROR LOL!!!" + err);
  }
});

// GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const reviews = await Getreviews.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Getreviews.findByIdAndDelete(req.params.id);
      res.status(200).json("Project has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;