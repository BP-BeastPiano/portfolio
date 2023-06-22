const Skill = require("../models/Skill");
const {
  verifyTokenAndAdmin,  
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/add", verifyTokenAndAdmin, async (req, res) => {
  const newSkill = new Skill(req.body);
  try {
    const savedSkill = await newSkill.save();
    res.status(200).json(savedSkill);
  } catch (err) {
    res.status(500).json("YOU GOT AN ERROR LOL!!!" + err);
  }
});

// GET ALL

router.get("/", async (req, res) => {
  try {
    const Skills = await Skill.find();
    res.status(200).json(Skills);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSkill);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json("Skill has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;