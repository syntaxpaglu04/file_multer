import express from "express";

import {
  createProfile,
  getProfiles,
  getProfile,
  deleteProfile,
  withdrawApplication,
} from "../profile.controller.js";

const router = express.Router();

router.post("/", createProfile);

router.get("/", getProfiles);

router.get("/:id", getProfile);

router.delete("/:id", deleteProfile);

router.put("/withdraw/:id", withdrawApplication);

export default router;