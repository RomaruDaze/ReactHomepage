import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import picture1 from "./images/websitepicture1.png";
import picture2 from "./images/websitepicture2.png";

const WorksCarousel = () => {
  const [index, setIndex] = useState(0);

  const imageUrls = [picture1, picture2];

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const customImageStyle = {
    width: "100%",
    height: "auto",
  };

  const customCarouselStyle = {
    width: "675px",
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={customCarouselStyle}
    >
      {imageUrls.map((imageUrl, idx) => (
        <Carousel.Item key={idx}>
          <img style={customImageStyle} src={imageUrl} alt={`Slide ${idx}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default WorksCarousel;
