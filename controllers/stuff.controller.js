const { Stuff } = require("../model/stuffSchema");

// REGISTER \\
const postStuff = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      login,
      parol,
      is_active
    } = req.body;

    const newStuff = new Stuff({
      first_name,
      last_name,
      phone_number,
      login,
      parol,
      is_active
    });
    await newStuff.save();

    return res.status(201).json({
      success: true,
      message: "Stuff muvaffaqiyatli ro'yxatga olindi."
    });

  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi.",
    });
  }
};


// GET \\
const getStuff = async (req, res) => {
  try {
    const stuffs = await Stuff.find({});

    res.json({
      success: true,
      message: "Barcha staflar ro'yxati.",
      innerData: stuffs,
    });

  } catch (error) {
    console.error("Error fetching stuffs:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


// DELETE \\
const deleteStuff = async (req, res) => {
  try {
    const stuffId = req.params.id;

    const deletedStuff = await Stuff.findByIdAndDelete(stuffId);

    if (!deletedStuff) {
      return res.status(404).json({ message: "Stuff not found" });
    } 

    res.json({ message: "Stuff deleted succesfully", deletedStuff});

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


// UPDATE \\
const updateStuff = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      first_name,
      last_name,
      phone_number,
      login,
      parol,
      is_active
    } = req.body;

    const updateStuff = {
      first_name,
      last_name,
      phone_number,
      login,
      parol,
      is_active
    };

    const updatedStuff = await Stuff.findByIdAndUpdate(id, updateStuff, { new: true });

    if (!updatedStuff) {
      return res.status(404).json({
        success: false,
        message: "Stuff not found"
      });
    }

    res.json({
      success: true,
      message: "Stuff updated successfully",
      role: updatedStuff,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message,
    });
  }
};


// SEARCH \\
const searchStuff = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Stuff.find({
      $or: [
        { first_name: {$regex: query, $options: "i"} },
        { last_name: {$regex: query, $options: "i"} }
      ],
    });

    res.json({
      success: true,
      innerData: result
    });

  } catch {
    console.error("Error fetching stuffs:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

module.exports = {
  postStuff,
  getStuff,
  deleteStuff,
  updateStuff,
  searchStuff
};