const Counter = require("../models/Counter");
const {
  verifyTokenAndAdmin,  
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/add", verifyTokenAndAdmin, async (req, res) => {
  const newCounter = new Counter(req.body);
  try {
    const savedCounter = await newCounter.save();
    res.status(200).json(savedCounter);
  } catch (err) {
    res.status(500).json("YOU GOT AN ERROR LOL!!!" + err);
  }
});

// GET ALL

router.get("/", async (req, res) => {
  try {
    const Counters = await Counter.find();
    res.status(200).json(Counters);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedCounter = await Counter.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCounter);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Counter.findByIdAndDelete(req.params.id);
    res.status(200).json("Counter has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;