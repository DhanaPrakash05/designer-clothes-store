const path = require("path");
const fs = require("fs");
const Sections = require("./customDressModel");

const uploadController = {
  handleUpload: async (req, res) => {
    try {
      const {  name, price , dressType, description, section} = req.body;
      let image;
      if (section === "Men") {
        image = new Sections.Men({
          name,
           price,
           dressType,
          description,
         
        });
      } else if (section === "Women") {
        image = new Sections.Women({
          name,
          price,
          dressType,
          description,
          
        });
      }
       else if (section === "Kids") {
        image = new Sections.Kids({
          name,
          price,
          dressType,
          description,
       
        });
      }
      await image.save();

      res
        .status(200)
        .json({ message: "Image uploaded successfully!"});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getImage: (req, res) => {
    const imageName = req.params.name;
    const imagePath = path.join(__dirname, "../../", "uploads", imageName);
    if (fs.existsSync(imagePath)) {
      res.sendFile(imagePath);
    } else if (fs.existsSync(`${imagePath}.png`)) {
      res.sendFile(`${imagePath}.png`);
    } else if (fs.existsSync(`${imagePath}.jpg`)) {
      res.sendFile(`${imagePath}.jpg`);
    } else if (fs.existsSync(`${imagePath}.jpeg`)) {
      res.sendFile(`${imagePath}.jpeg`);
    } else {
      res.status(404).send("Image not found");
    }
  },

  getDressMetadata: async (req, res) => {
    try {
      const name=req.params.name;
      const section=req.params.section;
      let imageMetadata;
      if(section==="Men"){
      imageMetadata = await Sections.Men.findOne({ name });
      }
      else if(section==="Women"){
      imageMetadata = await Sections.Women.findOne({ name });
      }
      if(section==="Kids"){
      imageMetadata = await Sections.Kids.findOne({ name });
      }

      if (imageMetadata) {
        res.status(200).json(imageMetadata);
      } else {
        console.error("Error retrieving image metadata:", error);
        res.status(404).send("Image metadata not found");
      }
    } catch (error) {
      console.error("Error retrieving image metadata:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getAllDressesMetadata: async (req, res) => {
    const  section  = req.params.section;
    let allImageMetadata;
    try {
      if (section === "Men") {
        allImageMetadata = await Sections.Men.find(
          {},
          "name price dressType description "
        );
      } else if(section === "Women"){
        allImageMetadata = await Sections.Women.find(
          {},
          "name price dressType  description "
        );
      } else if(section === "Kids"){
        allImageMetadata = await Sections.Kids.find(
          {},
          "name price dressType  description "
        );
      }
      res.status(200).json(allImageMetadata);
    } catch (error) {
      console.error("Error retrieving all image metadata:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = uploadController;
