const mongoose = require("mongoose");


const membersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  college: { type: String },
  year: { type: Number },
  Branch: { type: String },
  city: { type: String }
});


const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true,unique:true},
  teamCount: { type: Number },
  members: [membersSchema]
});


const Team = mongoose.model("team", teamSchema);

module.exports = Team;
