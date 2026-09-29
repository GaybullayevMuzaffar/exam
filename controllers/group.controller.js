const { Group } = require("../model/groupSchema");

// REGISTER \\
const postGroup = async (req, res) => {
  try {
    const {
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_idint,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    } = req.body;

    const newGroup = new Group({
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_idint,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    });
    await newGroup.save();

    return res.status(201).json({
      success: true,
      message: "Group muvaffaqiyatli ro'yxatga olindi."
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
const getGroups = async (req, res) => {
  try {
    const groups = await Group.find({});

    res.json({
      success: true,
      message: "Barcha guruhlar ro'yxati.",
      innerData: groups,
    });

  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


// DELETE \\
const deleteGroup = async (req, res) => {
  try {
    const groupId = req.params.id;

    const deletedGroup = await Group.findByIdAndDelete(groupId);

    if (!deletedGroup) {
      return res.status(404).json({ message: "Group not found" });
    } 

    res.json({ message: "Group deleted succesfully", deletedGroup});

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


// UPDATE \\
const updateGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_idint,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    } = req.body;

    const updateGroup = {
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_idint,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    };

    const updatedGroup = await Group.findByIdAndUpdate(id, updateGroup, { new: true });

    if (!updatedGroup) {
      return res.status(404).json({
        success: false,
        message: "Group not found"
      });
    }

    res.json({
      success: true,
      message: "Group updated successfully",
      role: updatedGroup,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message,
    });
  }
}


// SEARCH \\
const searchGroup = async (req, res) => {
   try {
    const { query } = req.query;

    if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Role.find({
      $or: [
        { group_name: {$regex: query, $options: "i"} }
      ],
    });

    res.json({
      success: true,
      innerData: result
    });

  } catch {
    console.error("Error fetching groups:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};


module.exports = {
  postGroup,
  getGroups, 
  deleteGroup,
  updateGroup, 
  searchGroup
};