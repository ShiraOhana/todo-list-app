import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://shira:Lucky123@cluster0.rwjlm9x.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5050;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is up and running on port ${PORT}`)
    )
  )
  .catch((err) => console.log(err));

app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("testing");
});
