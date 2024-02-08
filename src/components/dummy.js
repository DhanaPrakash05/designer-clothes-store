import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css';
import css from "../css/Menu.module.css";
const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [section, setSection] = useState("");
  const [displayedImage, setDisplayedImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };

  const handleNameChange = (e) => {
    setImageName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setImageDescription(e.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", imageName);
    formData.append("description", imageDescription);
    formData.append("price", price);
    formData.append("dressType", type);
    formData.append("section", section);

    try {
      await axios.post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const [allImageMetadata, setAllImageMetadata] = useState([]);

  const handleDisplay = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/image/${imageName}`,
        { responseType: "blob" }
      );

      const url = URL.createObjectURL(new Blob([response.data]));
      setDisplayedImage(url);

      const metadataResponse = await axios.get(
        `http://localhost:3001/metadata/${imageName}/${section}`
      );
      console.log("Image metadata:", metadataResponse.data);
    } catch (error) {
      console.error("Error retrieving image:", error);
    }
  };

  const handleDisplayAll = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/all/metaData/${section}`
      );
      console.log("All Image Metadata:", response.data);
      setAllImageMetadata(response.data);
    } catch (error) {
      console.error("Error retrieving all image metadata:", error);
    }
  };

  useEffect(() => {
    const fetchAllImageMetadata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/all/metaData/Women`
        );
        setAllImageMetadata(response.data);
      } catch (error) {
        console.error("Error retrieving all image metadata:", error);
      }
    };

    fetchAllImageMetadata();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <h2>Image Uploader</h2>
      <input type="file" onChange={handleImageChange} />
      <br />
      <input
        type="text"
        placeholder="Image Name"
        value={imageName}
        onChange={handleNameChange}
      />
      <br />
      <input
        type="text"
        placeholder="Image Description"
        value={imageDescription}
        onChange={handleDescriptionChange}
      />
      <br />
      <input
        type="text"
        placeholder="Section"
        value={section}
        onChange={handleSectionChange}
      />
      <br />
      <input
        type="Number"
        placeholder="Price"
        value={price}
        onChange={handlePriceChange}
      />
      <br />
      <input
        type="text"
        placeholder="type"
        value={type}
        onChange={handleTypeChange}
      />
      <br />
      <button onClick={handleUpload}>Upload Image</button>
      <button onClick={handleDisplay}>Display Image</button>
      {displayedImage && (
        <div>
          <h3>Displayed Image</h3>
          <img
            src={displayedImage}
            alt="Displayed"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
      <button onClick={handleDisplayAll}>Display All Images</button>
      <div className={css.dummy}>
        <Carousel responsive={responsive} autoPlay={true}>
          {allImageMetadata.map((imageMetadata) => (
            <div key={imageMetadata.imageName}>
              <h3>{imageMetadata.name}</h3>
              <p>{imageMetadata.description}</p>
              <img
                src={`http://localhost:3001/image/${imageMetadata.name}`}
                alt={imageMetadata.name}
                style={{ maxWidth: "100%" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageUploader;
