const { Role } = require("../model/roleSchema");

// REGISTER \\
const postRole = async (req, res) => {
  try {
    const { name } = req.body;

    const newRole = new Role({ name });

    await newRole.save();

    return res.status(201).json({
      success: true,
      message: "Rol muvaffaqiyatli ro'yxatga olindi."
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
const getRoles = async (req, res) => {
  try {
    const roles = await Role.find({});

    res.json({
      success: true,
      message: "Barcha ro'llar ro'yxati.",
      innerData: roles,
    });

  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


// DELETE \\
const deleteRoles = async (req, res) => {
  try {
    const roleID = req.params.id;

    const deletedRole = await Role.findByIdAndDelete(roleID);

    if (!deletedRole) {
      return res.status(404).json({ message: "Role not found" });
    }

    res.json({ message: "Role deleted succesfully", deletedRole });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


// UPDATE \\ 
const updateRole = async (req, res) => {
  try {
    const { id } = req.params;

    const { name } = req.body;

    const updateRole = { name };

    const updatedRole = await Role.findByIdAndUpdate(id, updateRole, { new: true });

    if (!updatedRole) {
      return res.status(404).json({
        success: false,
        message: "Role not found"
      });
    }

    res.json({
      success: true,
      message: "Role updated successfully",
      role: updatedRole,
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
const searchRole = async (req, res) => {
  try {
    const { query } = req.query;

     if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Role.find({
      $or: [
        { name: {$regex: query, $options: "i"} },
      ],
    });

    res.json({
      success: true,
      innerData: result
    });

  } catch {
    console.error("Error fetching roles:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

module.exports = {
  postRole,
  getRoles,
  deleteRoles,
  updateRole,
  searchRole
};