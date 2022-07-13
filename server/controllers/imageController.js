const ImageModel = require("../models/imageModel");

exports.getAllImages = async (req, res) => {
  const images = await ImageModel.find();
  return res.send({ images });
};

exports.getSingleImage = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json("Something went wrong!");

  let image = await ImageModel.findById(id);
  if (!image) res.status(400).json("Image not exist!");
  return res.status(200).send(image);
};

exports.editSingelImage = async (req, res) => {
  const { url, details } = req.body;
  const { id } = req.params;
  if (!url && !details)
    return res.status(400).json("Please fill required details");

  ImageModel.findByIdAndUpdate(id, { url, details }, (err, doc) => {
    if (err) console.log(err.message);
  });
  return res.status(200).json({ msg: "Image edited successfully" });
};

exports.createImage = async (req, res) => {
  const { title, url, details } = req.body;
  if (!title && !url && !details)
    return res.status(400).json("Please fill required details");
  try {
    const newImage = new ImageModel({
      title,
      url,
      details,
    });
    await newImage.save();
    return res.status(201).json({ msg: "New Image Created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Something went wrong");
  }
};

exports.deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    await ImageModel.deleteOne({ _id: id });
    return res.status(200).json("Image deleted successfully!!");
  } catch (err) {
    console.log(err.message);
    return res.status(500).json("Something went wrong");
  }
};
