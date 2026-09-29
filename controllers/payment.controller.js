const { Payment } = require("../model/paymentSchema");

// REGISTER \\
const postPayment = async (req, res) => {
  try {
    const {
      student_id,
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent
    } = req.body;

    const newPayment = new Payment({
      student_id,
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent
    });
    await newPayment.save();

    return res.status(201).json({
      success: true,
      message: "To'lov muvaffaqiyatli ro'yxatga olindi."
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
const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({});

    res.json({
      success: true,
      message: "Barcha to'lovlar ro'yxati.",
      innerData: payments,
    });

  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi."
    });
  }
};


// DELETE \\
const deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;

    const deletedPayment = await Payment.findByIdAndDelete(paymentId);

    if (!deletedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    } 

    res.json({ message: "Payment deleted succesfully", deletedPayment});

  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server xatosi"});
  }
};


// SEARCH \\
const searchPayment = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !=="string") {
      return res.status(400).json({ message: "Qidiruv so'zini kiriting." });
    }

    const result = await Payment.find({
      $or: [
        { payment_date: {$regex: query, $options: "i"} },
        { payment_last_date: {$regex: query, $options: "i"} },
        { price: {$regex: query, $options: "i"} }
      ],
    });

    res.json({
      success: true,
      innerData: result
    });

  } catch {
    console.error("Error fetching payment:", error);
    res.status(500).json({ message: "Server xatosi" });
  }
};


module.exports = {
  postPayment,
  getPayments,
  deletePayment,
  searchPayment
};