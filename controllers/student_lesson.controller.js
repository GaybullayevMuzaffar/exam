const { Student_Lesson } = require("../model/student_lesssonSchema");

// REGISTER \\
const postStudentLesson = async (req, res) => {
  try {
    const {
      lesson_id,
      student_id,
      is_there,
      reason,
      be_paid
    } = req.body;

    const newStudentLesson = new Student_Lesson({
      lesson_id,
      student_id,
      is_there,
      reason,
      be_paid
    });
    await newStudentLesson.save();

    return res.status(201).json({
      success: true,
      message: "Student Lesson muvaffaqiyatli ro'yxatga olindi."
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
const getStudentLesson = async (req, res) => {
  try {
    const studentLessons = await Student_Lesson.find({});

    res.json({
      success: true,
      message: "Barcha student lesson ro'yxati.",
      innerData: studentLessons,
    });

  } catch (error) {
    console.error("Error fetching student lessons:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


// DELETE \\
const deleteStudentLesson = async (req, res) => {
  try {
    const studentLessonId = req.params.id;

    const deletedStudentLesson = await Student_Lesson.findByIdAndDelete(studentLessonId);

    if (!deletedStudentLesson) {
      return res.status(404).json({ message: "Student lesson not found" });
    } 

    res.json({ message: "Student lesson deleted succesfully", deletedStudentLesson});

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


// UPDATE \\
const updateStudentLesson = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      lesson_id,
      student_id,
      is_there,
      reason,
      be_paid
    } = req.body;

    const updateStudentLesson = {
      lesson_id,
      student_id,
      is_there,
      reason,
      be_paid
    };

    const updatedStudentLesson = await Student_Lesson.findByIdAndUpdate(id, updateStudentLesson, { new: true });

    if (!updatedStudentLesson) {
      return res.status(404).json({
        success: false,
        message: "Student Lesson not found"
      });
    }

    res.json({
      success: true,
      message: "Student lesson updated successfully",
      student_lesson: updatedStudentLesson,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message,
    });
  }
};


module.exports = {
  postStudentLesson,
  getStudentLesson,
  deleteStudentLesson,
  updateStudentLesson
}