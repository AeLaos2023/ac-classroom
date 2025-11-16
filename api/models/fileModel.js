const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  group_code: {
    type: "String",
  },
  group_name: {
    type: "String",
  },
  path_list: {
    type: ["String"],
  },
});

module.exports = mongoose.model("file_groups", lessonSchema);
