const { Stage } = require("../model/stageSchema");

// REGISTER \\ 
const postStage = async (req, res) => {
  try {
    const { name } = req.body;

    const newStage = new Stage({ name });

    await newStage.save();

    return res.status(201).json({
      success: true,
      message: "Stage muvaffaqiyatli ro'yxatga olindi."
    });

  }catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi.",
    });
  }
};


// GET \\
const getStages = async (req, res) => {
  try {
    const stages = await Stage.find({});

    res.json({
      success: true,
      message: "Barcha stagelar ro'yxati.",
      innerData: stages,
    });

  } catch (error) {
    console.error("Error fetching stages:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


// DELETE \\ 
const deleteStage = async (req, res) => {
  try {
    const stageId = req.params.id;

    const deletedStage = await Stage.findByIdAndDelete(stageId);

    if (!deletedStage) {
      return res.status(404).json({ message: "Stage not found" });
    }

    res.json({ message: "Stage deleted succesfully", deletedStage });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


// UPDATE \\ 
const updateStage = async (req, res) => {
  try {
    const { id } = req.params;

    const { name } = req.body;

    const updateStage = { name };

    const updatedStage = await Stage.findByIdAndUpdate(id, updateStage, { new: true });

     if (!updatedStage) {
      return res.status(404).json({
        success: false,
        message: "Stage not found"
      });
    }

    res.json({
      success: true,
      message: "Stage updated successfully",
      role: updatedStage,
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
const searchStage = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Stage.find({
      $or: [
        { name: {$regex: query, $options: "i"} },
      ],
    });

    res.json({
      success: true,
      innerData: result
    });

  } catch {
    console.error("Error fetching stages:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};


module.exports = {
  postStage,
  getStages,
  deleteStage,
  updateStage,
  searchStage
};