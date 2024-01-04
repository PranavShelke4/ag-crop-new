/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Assets/header/header_img_1.webp";
import img2 from "../../Assets/header/header_img_2.webp";
import img3 from "../../Assets/header/header_img_3.webp";
import "../../Style/Home/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const slides = [
    {
      img: img1,
      title: "Pumping Solutions for",
      subTitle: "for Building and Industrial Segment",
      url: "/control-Panels-for-plumbing-solutions",
    },
    {
      img: img2,
      title: "Electrical Control Panel",
      subTitle: "with the best Built-in quality and After-sales service",
      url: "/electrical-control-panel",
    },
    {
      img: img3,
      title: "Fire Fighting Systems",
      subTitle: "for commercial and industrial applications",
      url: "/fire-fighting-services",
    },
  ];
  const [index, setIndex] = useState(0);

  const selectSlide = (i) => {
    setIndex(i);
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(timer);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });
  return (
    <div className="carousel fade-in" {...handlers}>
      <div className="carousel-slide">
        <div className="carousel-title">
          <h1>{slides[index].title}</h1>
          <h2>{slides[index].subTitle}</h2>
          <span className="carousel-hr"></span>
          <button className="carousel-button"><Link to={slides[index].url} className="carousel-button-Link">Know More</Link></button>
        </div>
        <img className="carousel-img" src={slides[index].img} alt="img" />
      </div>

      <div className="carousel-dots">
        {slides.map((slide, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === index ? "active" : ""}`}
            onClick={() => selectSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Header;
