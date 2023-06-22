const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); 
const cors = require("cors");
const projectRoute = require("./routes/project")
const contactRoute = require("./routes/contact")
const getreviewsRoute = require("./routes/getreviews")
const showingreviewsRoute = require("./routes/showingreviews")
const skillRoute = require("./routes/skill")
const teamRoute = require("./routes/team")
const servicesRoute = require("./routes/services")
const counterRoute = require("./routes/counter")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const visitRoute = require("./routes/visit")

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log("SORRY YOU GOT AN ERROR : " + err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/projects", projectRoute)
app.use("/api/contact", contactRoute)
app.use("/api/user-reviews", getreviewsRoute)
app.use("/api/showing-reviews", showingreviewsRoute)
app.use("/api/skills", skillRoute)
app.use("/api/team", teamRoute)
app.use("/api/services", servicesRoute)
app.use("/api/counter", counterRoute)
app.use("/api/users", userRoute);
app.use("/api/visits", visitRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });
  