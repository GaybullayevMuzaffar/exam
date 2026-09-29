const { Lid } = require("../model/lidSchema");

// REGISTER \\
const postLid = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      lid_stage_id, 
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reason_id
    } = req.body;

    const newStuff = new Stuff({
      first_name,
      last_name,
      phone_number,
      lid_stage_id, 
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reason_id
    });
    await newStuff.save();

    return res.status(201).json({
      success: true,
      message: "Lid muvaffaqiyatli ro'yxatga olindi."
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
const getLid = async (req, res) => {
  try {
    const lids = await Lid.find({});

    res.json({
      success: true,
      message: "Barcha staflar ro'yxati.",
      innerData: lids,
    });

  } catch (error) {
    console.error("Error fetching lids:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


// DELETE \\
const deleteLid = async (req, res) => {
  try {
    const lidId = req.params.id;

    const deletedLid = await Lid.findByIdAndDelete(lidId);

    if (!deletedLid) {
      return res.status(404).json({ message: "Lid not found" });
    } 

    res.json({ message: "Lid deleted succesfully", deletedStuff});

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


// UPDATE \\
const updateLid = async (req, res) => {
  try {
    const { id } = req.params;
      
    const {
      first_name,
      last_name,
      phone_number,
      lid_stage_id, 
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reason_id
    } = req.body;

    const updateLid = {
      first_name,
      last_name,
      phone_number,
      lid_stage_id, 
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reason_id
    };

    const updatedLid = await Stuff.findByIdAndUpdate(id, updateLid, { new: true });

    if (!updatedLid) {
      return res.status(404).json({
        success: false,
        message: "Lid not found"
      });
    }

    res.json({
      success: true,
      message: "Lid updated successfully",
      role: updatedLid,
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
const searchLid = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Lid.find({
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
    console.error("Error fetching lids:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};


module.exports = {
  postLid,
  getLid,
  deleteLid,
  updateLid,
  searchLid
}