const { Stuff_Role } = require("../model/stuff_roleSchema");

// REGISTER \\
const postStuffRole = async (req, res) => {
  try {
    const {
      stuff_id,
      role_id
    } = req.body;

    const newStuffRole = new Stuff_Role({
      stuff_id,
      role_id
    });

    await newStuffRole.save();

    return res.status(201).json({
      success: true,
      message: "StuffRol muvaffaqiyatli ro'yxatga olindi."
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
const getStuffRole = async (req, res) => {
  try {
    const StuffRoles = await Stuff_Role.find({});

    res.json({
      success: true,
      message: "Barcha stuff-rollar ro'yxati.",
      innerData: StuffRoles,
    });

  } catch (error) {
    console.error("Error fetching StuffRoles:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
}

// DELETE \\
const deleteStuffRole = async (req, res) => {
  try {
    const StuffRoleId = req.params.id;

    const deletedStuffRole = await Stuff_Role.findByIdAndDelete(StuffRoleId);

    if (!deletedStuffRole) {
      return res.status(404).json({ message: "Stuff Role not found" });
    }

    res.json({ message: "Stuff Role deleted succesfully", deletedStuffRole });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


module.exports = {
  postStuffRole,
  getStuffRole,
  deleteStuffRole
};