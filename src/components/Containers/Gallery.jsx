import { useState } from "react";
import ImageContainer from "./ImageContainer";
import Modal from "./Modal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-col relative">
      <h1>Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <ImageContainer onClick={() => handleClick("/result1.webp")}>
          <img src="/result1.webp" loading="lazy" />
        </ImageContainer>
        <ImageContainer onClick={() => handleClick("/result2.webp")}>
          <img src="/result2.webp" loading="lazy" />
        </ImageContainer>
        <ImageContainer onClick={() => handleClick("/result3.webp")}>
          <img src="/result3.webp" loading="lazy" />
        </ImageContainer>
        <ImageContainer onClick={() => handleClick("/result4.webp")}>
          <img src="/result4.webp" loading="lazy" />
        </ImageContainer>
      </div>
      <Modal modalOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && <img src={selectedImage} />}
      </Modal>
    </div>
  );
};

export default Gallery;
