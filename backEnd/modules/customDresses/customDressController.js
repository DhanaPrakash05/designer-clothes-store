const path = require("path");
const fs = require("fs");
const Sections = require("./customDressModel");

const uploadController = {
  handleUpload: async (req, res) => {
    try {
      const {  name, price , dressType, description, section} = req.body;
      let dress;
      if (section === "Men") {
        dress = new Sections.Men({
          name,
           price,
           dressType,
          description,
         
        });
      } else if (section === "Women") {
        dress = new Sections.Women({
          name,
          price,
          dressType,
          description,
          
        });
      }
       else if (section === "Kids") {
        dress = new Sections.Kids({
          name,
          price,
          dressType,
          description,
       
        });
      }
      await dress.save();

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
      let dressMetadata;
      if(section==="Men"){
      dressMetadata = await Sections.Men.findOne({ name });
      }
      else if(section==="Women"){
      dressMetadata = await Sections.Women.findOne({ name });
      }
      if(section==="Kids"){
      dressMetadata = await Sections.Kids.findOne({ name });
      }

      if (dressMetadata) {
        res.status(200).json(dressMetadata);
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
    let alldressMetadata;
    try {
      if (section === "Men") {
        alldressMetadata = await Sections.Men.find(
          {},
          "name price dressType description "
        );
      } else if(section === "Women"){
        alldressMetadata = await Sections.Women.find(
          {},
          "name price dressType  description "
        );
      } else if(section === "Kids"){
        alldressMetadata = await Sections.Kids.find(
          {},
          "name price dressType  description "
        );
      }
      res.status(200).json(alldressMetadata);
    } catch (error) {
      console.error("Error retrieving all image metadata:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = uploadController;
