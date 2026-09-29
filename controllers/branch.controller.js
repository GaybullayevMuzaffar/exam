const { Branch } = require("../model/branchSchema");

// REGISTER \\
const postBranch = async (req, res) => {
  try {
    const {
      name, 
      address, 
      call_number
    } = req.body;

    const newBranch = new Branch({
      name, 
      address, 
      call_number
    });
    await newBranch.save();

    return res.status(201).json({
      success: true,
      message: "Branch muvaffaqiyatli ro'yxatga olindi."
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
const getBranches = async (req, res) => {
  try {
    const branches = await Branch.find({});

    res.json({
      success: true,
      message: "Barcha branchlar ro'yxati.",
      innerData: branches,
    });

  } catch (error) {
    console.error("Error fetching branches:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
}


// DELETE \\ 
const deleteBranch = async (req, res) => {
  try {
    const branchId = req.params.id;

    const deletedBranch = await Branch.findByIdAndDelete(branchId);

    if (!deletedBranch) {
      return res.status(404).json({ message: "Branch not found" });
    } 

    res.json({ message: "Branch deleted succesfully", deletedBranch});

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


// UPDATE \\ 
const updateBranch = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name, 
      address, 
      call_number
    } = req.body;

    const updateBranch = {
      name, 
      address, 
      call_number
    };

    const updatedBranch = await Branch.findByIdAndUpdate(id, updateBranch, { new: true });

    if (!updatedBranch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found"
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
const searchBranch = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Branch.find({
      $or: [
        { name: {$regex: query, $options: "i"} },
        { address: {$regex: query, $options: "i"} }
      ],
    });

    res.json({
      success: true,
      innerData: result
    });

  } catch {
    console.error("Error fetching branches:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};


module.exports = {
  postBranch,
  getBranches,
  deleteBranch,
  updateBranch,
  searchBranch
}