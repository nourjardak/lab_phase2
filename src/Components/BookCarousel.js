import React from "react";
import { Carousel } from "react-bootstrap";
import library from "../image/library.jpg"
import lamps from "../image/lamps and bookshelf.jpg"
import rain from "../image/books and rain.jpg"

const BookCarousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="img1 d-block w-100"
            src={library}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="welcome">Welcome Fellow Bookworms!! </h3>
            <p>Check what this blog is About!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img1 d-block w-100"
            src={lamps}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="welcome2">Find Your Next Book To Read!!</h3>
            <p>A books' collection of every genre : Historical , Romance.. and type : Novels , mangas... </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img1 d-block w-100"
            src={rain}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="welcome3" style={{fontSize:"48",fontWeight:600}}>Share Your Insights And Exchange Books With Other Bookworms!!</h3>
            <p>React to my reviews and share your favourite book for us to read and review.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BookCarousel;
