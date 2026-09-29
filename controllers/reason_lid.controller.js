const { Reason_Lid } = require("../model/reason_lidSchema");

const postReasonLid = async (req, res) => {
  try {
    const { reason_lid } = req.body;

    const newReasonLid = new Reason_Lid({ reason_lid });

    await newReasonLid.save();

    return res.status(201).json({
      success: true,
      message: "Reason Lid muvaffaqiyatli ro'yxatga olindi."
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi.",
    });
  }
};


const getReasonLid = async (req, res) => {
  try {
    const reasonLid = await Reason_Lid.find({});

    res.json({
      success: true,
      message: "Barcha ro'yxat.",
      innerData: reasonLid,
    });
  } catch (error) {
    console.error("Error fetching reasons:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


const deleteReasonLid = async (req, res) => {
  try {
    const reasonLidId = req.params.id;

    const deletedReasonLid = await Reason_Lid.findByIdAndDelete(reasonLidId);

    if (!deletedReasonLid) {
      return res.status(404).json({ message: "Reason not found" });
    }
    res.json({ message: "Reason deleted succesfully", deletedReasonLid });
  }catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


const updateReasonLid = async (req, res) => {
  try {
    const { id } = req.params;

    const { reason_lid } = req.body;

    const updateReasonLid = { reason_lid };

    const updatedReasonLid = await Reason_Lid.findByIdAndUpdate(id, updateReasonLid, { new: true });

    if (!updatedReasonLid) {
      return res.status(404).json({
        success: false,
        message: "Reason not found"
      });
    }

    res.json({
      success: true,
      message: "Reason updated successfully",
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


const searchReasonLid = async (req, res) => {
  try {
    const { query } = req.query;

     if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Role.find({
      $or: [
        { reason_lid: {$regex: query, $options: "i"} },
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
  postReasonLid,
  getReasonLid,
  deleteReasonLid,
  updateReasonLid,
  searchReasonLid
}