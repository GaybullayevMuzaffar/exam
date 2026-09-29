const { Student_Group } = require("../model/student_groupSchema");

// REGISTER \\
const postStudentGroup = async (req, res) => {
  try {
    const {
      student_id, 
      group_id
    } = req.body;

    const newStudentGroup = new Student_Group({
      student_id, 
      group_id
    });

    await newStudentGroup.save();

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
};


// GET \\
const getStudentGroup = async (req, res) => {
  try {
    const StudentGroups = await Student_Group.find({});

    res.json({
      success: true,
      message: "Barcha ro'yxat olingan.",
      innerData: StudentGroups,
    });

  } catch (error) {
    console.error("Error fetching Student Groups:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


// DELETE \\
const deleteStudentGroup = async (req, res) => {
  try {
    const StudentGroupId = req.params.id;

    const deletedStudentGroup = await Student_Group.findByIdAndDelete(StudentGroupId);

    if (!deletedStudentGroup) {
      return res.status(404).json({ message: "Student Group not found" });
    }

    res.json({ message: "Student Group deleted succesfully", deletedStudentGroup });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


module.exports = {
  postStudentGroup, 
  getStudentGroup,
  deleteStudentGroup
};