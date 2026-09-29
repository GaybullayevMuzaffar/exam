const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}
connectToDB();


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


///// SWAGGER \\\\\
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


///// ROUTES \\\\\
const { roles } = require("./routes/roleRoute");
app.use("/roles", roles);

const { stuffs } = require("./routes/stuffRoute");
app.use("/stuffs", stuffs);

const { stuffRoles } = require("./routes/stuff_roleRoute");
app.use("/stuffRoles", stuffRoles);

const { stages } = require("./routes/stageRoute");
app.use("/stages", stages);

const { branches } = require("./routes/branchRoute");
app.use("/branches", branches);

const { groups } = require("./routes/groupRoute");
app.use("/groups", groups);

const { groupStuffs } = require("./routes/group_stuffRoute");
app.use("/groupStuffs", groupStuffs);

const { lessons } = require("./routes/lessonRoute");
app.use("/lessons", lessons);

const { lidStatus } = require("./routes/lid_statusRoute");
app.use("/lidStatus", lidStatus);

const { reasonLid } = require("./routes/reason_lidRoute");
app.use("/reasonLid", reasonLid);

const { lids } = require("./routes/lidRoute");
app.use("/lids", lids);

const { students } = require("./routes/studentRoute");
app.use("/students", students); 

const { studentGroups } = require("./routes/student_groupRoute");
app.use("/studentGroups", studentGroups);

const { studentLesson } = require("./routes/student_lessonRoute");
app.use("/studentLesson", studentLesson);

const { payments } = require("./routes/paymentRoute");
app.use("/payments", payments);