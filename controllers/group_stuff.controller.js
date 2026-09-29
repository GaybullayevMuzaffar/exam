const { Group_Stuff } = require("../model/group_stuffSchema");

// REGISTER \\
const postGroupStuff = async (req, res) => {
  try {
    const {
      group_id, 
      stuff_id
    } = req.body;

    const newGroupStuff = new Group_Stuff({
      group_id,
      stuff_id
    });

    await newGroupStuff.save();

    return res.status(201).json({
      success: true,
      message: "Muvaffaqiyatli ro'yxatga olindi."
    });

  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi.",
    });
  }
}

// GET \\
const getGroupStuff = async (req, res) => {
  try {
    const GroupStuffs = await Group_Stuff.find({});

    res.json({
      success: true,
      message: "Barcha ro'yxat olingan.",
      innerData: GroupStuffs,
    });

  } catch (error) {
    console.error("Error fetching GroupStuffs:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
}

// DELETE \\
const deleteGroupStuff = async (req, res) => {
  try {
    const GroupStuffId = req.params.id;

    const deletedGroupStuff = await Group_Stuff.findByIdAndDelete(GroupStuffId);

    if (!deletedGroupStuff) {
      return res.status(404).json({ message: "Group Stuff not found" });
    }

    res.json({ message: "Group Stuff deleted succesfully", deleteGroupStuff });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};

module.exports = {
  postGroupStuff,
  getGroupStuff,
  deleteGroupStuff
};