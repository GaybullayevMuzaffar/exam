const { Lid_Status } = require("../model/lid_statusSchema");

const postLidStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const newLidStatus = new Lid_Status({ status });

    await newLidStatus.save();

    return res.status(201).json({
      success: true,
      message: "Status muvaffaqiyatli ro'yxatga olindi."
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi.",
    });
  }
};


const getLidStatus = async (req, res) => {
  try {
    const lidStatus = await Lid_Status.find({});

    res.json({
      success: true,
      message: "Barcha ro'yxat.",
      innerData: lidStatus,
    });
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


const deleteLidStatus = async (req, res) => {
  try {
    const lidStatusId = req.params.id;

    const deletedLidStatus = await Lid_Status.findByIdAndDelete(lidStatusId);

    if (!deletedLidStatus) {
      return res.status(404).json({ message: "Status not found" });
    }
    res.json({ message: "Status deleted succesfully", deletedLidStatus });
  }catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
}

const updateLidStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const { status } = req.body;

    const updateLidStatus = { status };

    const updatedLidStatus = await Role.findByIdAndUpdate(id, updateLidStatus, { new: true });

    if (!updatedLidStatus) {
      return res.status(404).json({
        success: false,
        message: "Status not found"
      });
    }

    res.json({
      success: true,
      message: "Status updated successfully",
      role: updatedLidStatus,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message,
    });
  }
};


const searchLidStatus = async (req, res) => {
  try {
    const { query } = req.query;

     if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Role.find({
      $or: [
        { status: {$regex: query, $options: "i"} },
      ],
    });

    res.json({
      success: true,
      innerData: result
    });

  } catch {
    console.error("Error fetching status:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

module.exports = {
  postLidStatus, 
  getLidStatus, 
  deleteLidStatus, 
  updateLidStatus, 
  searchLidStatus
}