const express = require("express");
const router = express.Router();
const {
  createImage,
  getAllImages,
  getSingleImage,
  editSingelImage,
  deleteImage,
} = require("../controllers/imageController");

router.get("/", getAllImages);

router.get("/show/:id", getSingleImage);

router.post("/", createImage);

router.put("/:id/edit", editSingelImage);

router.delete("/delete/:id", deleteImage);

module.exports = router;
