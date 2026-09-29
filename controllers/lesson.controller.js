const { Lesson } = require("../model/lessonSchema");

// REGISTER \\
const postLesson = async (req, res) => {
  try {
    const {
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date
    } = req.body;

    const newLesson = new Lesson({
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date
    });
    await newLesson.save();

    return res.status(201).json({
      success: true,
      message: "Lesson muvaffaqiyatli ro'yxatga olindi."
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
const getLesson = async (req, res) => {
  try {
    const lessons = await Lesson.find({});

    res.json({
      success: true,
      message: "Barcha lessonlar ro'yxati.",
      innerData: lessons,
    });

  } catch (error) {
    console.error("Error fetching stuffs:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
}

// DELETE \\
const deleteLesson = async (req, res) => {
  try {
    const lessonId = req.params.id;

    const deletedLesson = await Lesson.findByIdAndDelete(lessonId);

    if (!deleteLesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.json({ message: "Lesson deleted succesfully", deletedLesson});

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};

// UPDATE \\
const updateLesson = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date
    } = req.body;

    const updateLesson = {
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date
    };

    const updatedLesson = await Lesson.findByIdAndUpdate(id, updateLesson, { new: true });

    if (!updatedLesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found"
      });
    }

    res.json({
      success: true,
      message: "Lesson updated successfully",
      lesson: updatedLesson,
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
const searchLesson = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Role.find({
      $or: [
        { lesson_theme: {$regex: query, $options: "i"} },
        { lesson_number: {$regex: query, $options: "i"} }
      ],
    });

    res.json({
      success: true,
      innerData: result
    });

  } catch {
    console.error("Error fetching lessons:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};

module.exports = {
  postLesson, 
  getLesson, 
  deleteLesson, 
  updateLesson, 
  searchLesson
};