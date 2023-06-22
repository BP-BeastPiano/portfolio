const Team = require("../models/Team");
const {
  verifyTokenAndAdmin,  
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/add", verifyTokenAndAdmin, async (req, res) => {
  const newTeam = new Team(req.body);
  try {
    const savedTeam = await newTeam.save();
    res.status(200).json(savedTeam);
  } catch (err) {
    res.status(500).json("YOU GOT AN ERROR LOL!!!" + err);
  }
});

// GET ALL

router.get("/", async (req, res) => {
  try {
    const Teams = await Team.find();
    res.status(200).json(Teams);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedTeam = await Team.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTeam);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.status(200).json("Member has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;