import Profile from "../model/profile.js";

// CREATE PROFILE
export const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);

    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL PROFILES
export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();

    res.json(profiles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE PROFILE
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE PROFILE
export const deleteProfile = async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Profile Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// WITHDRAW APPLICATION
export const withdrawApplication = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      {
        applicationStatus: "Withdrawn",
        withdrawn: true,
      },
      {
        new: true,
      }
    );

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};