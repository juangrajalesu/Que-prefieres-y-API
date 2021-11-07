import mongoose from "mongoose";
import config from "./config.js";

(async () => {
  try {
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    };

    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`,
      mongooseOptions
    );
    console.log(`database is connected to: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
})();
