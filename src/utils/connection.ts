import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://gui:gui@cluster0.8qfsp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
