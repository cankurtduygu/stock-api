"use strict";

import mongoose from "mongoose";

const dbConnection = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("* DB Connected *"))
    .catch((err) => {
      console.log("! DB Not Connected !");
      throw err;
    });
};

export default dbConnection;

