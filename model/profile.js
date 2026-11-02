import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    qualifications: [
      {
        degree: String,
        institute: String,
        passingYear: Number,
      },
    ],

    skills: [String],

    resumeUrl: String,

    photoUrl: String,

    applicationStatus: {
      type: String,
      default: "Applied",
    },

    withdrawn: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;