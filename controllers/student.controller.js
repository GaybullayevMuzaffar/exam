const { Student } = require("../model/studentSchema");

// REGISTER \\
const postStudent = async (req, res) => {
  try {
    const {
      lid_id,
      first_name,
      last_name,
      phone_number,
      birthday,
      gender
    } = req.body;

    const newStudent = new Student({
      lid_id,
      first_name,
      last_name,
      phone_number,
      birthday,
      gender
    });
    await newStudent.save();

    return res.status(201).json({
      success: true,
      message: "Student muvaffaqiyatli ro'yxatga olindi."
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
const getStudent = async (req, res) => {
  try {
    const students = await Student.find({});

    res.json({
      success: true,
      message: "Barcha staflar ro'yxati.",
      innerData: students,
    });

  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


// DELETE \\
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;

    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    } 

    res.json({ message: "Student deleted succesfully", deletedStudent});

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


// UPDATE \\
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      lid_id,
      first_name,
      last_name,
      phone_number,
      birthday,
      gender
    } = req.body;

    const updateStudent = {
      lid_id,
      first_name,
      last_name,
      phone_number,
      birthday,
      gender
    };

    const updatedStudent = await Student.findByIdAndUpdate(id, updateStudent, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.json({
      success: true,
      message: "Student updated successfully",
      student: updatedStudent,
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
const searchStudent = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Student.find({
      $or: [
        { first_name: {$regex: query, $options: "i"} },
        { last_name: {$regex: query, $options: "i"} },
        { phone_number: {$regex: query, $options: "i"} }
      ],
    });

    res.json({
      success: true,
      innerData: result
    });

  } catch {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};


module.exports = {
  postStudent,
  getStudent,
  deleteStudent,
  updateStudent,
  searchStudent
}