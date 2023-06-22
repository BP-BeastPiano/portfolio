const Contact = require("../models/Contact");
const {
  verifyTokenAndAdmin,  
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/add", async (req, res) => {
  const newMessage = new Contact(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json("YOU GOT AN ERROR LOL!!!" + err);
  }
});

// GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Contact.findByIdAndDelete(req.params.id);
      res.status(200).json("Project has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
