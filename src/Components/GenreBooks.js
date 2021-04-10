import React, { useState } from "react";
import { Button, Card} from "react-bootstrap";
import { useSelector } from "react-redux";
import AddModal from "./AddModal";
import BookCard from "./BookCard";

const GenreBooks = ({ genre, headerStyle, Gstyling }) => {
  const bookList = useSelector((state) => state.BookReducer.bookList);
  const [imgStyle, setImgStyle] = useState("");
  const [titleStyle, setTitleStyle] = useState("");

  console.log(genre);
  Gstyling(genre);

  const styling = (genre) => {
    switch (genre) {
      case "Historical":
        setImgStyle((imgStyle)=>"Hbookimg");
        setTitleStyle((titleStyle)=>"Htitle");
        break;
      case "Romance":
        setImgStyle((imgStyle)=>"Rbookimg");
        setTitleStyle((titleStyle)=>"Rtitle");
        break;
      case "Thriller":
        setImgStyle((imgStyle)=>"Tbookimg");
        setTitleStyle((titleStyle)=>"Ttitle");
        break;
      case "Mystery":
        setImgStyle((imgStyle)=>"Mbookimg");
        setTitleStyle((titleStyle)=>"Mtitle");
        break;
      case "Fantasy":
        setImgStyle((imgStyle)=>"Fbookimg");
        setTitleStyle((titleStyle)=>"Ftitle");
        break;
      case "Action":
        setImgStyle((imgStyle)=>"Abookimg");
        setTitleStyle((titleStyle)=>"Atitle");
        break;
      default:
        setTitleStyle({});
        setImgStyle({});
        break;
    }
  };

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Card
        className=" mx-3 my-5 "
        style={{
          width: "100%",
          boxShadow: "5px 10px 18px rgb(203, 207, 214)",
          borderRadius: "10px",
        }}
      >
        <Card.Header
          className={headerStyle}
          style={{
            fontSize: "30px",
            backgroundColor: "rgb(99, 65, 65)",
            color: "white",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          {genre}
        </Card.Header>
        <Card.Body className="row justify-content-around">
          {bookList
            .filter((book) => book.type.toUpperCase() === genre.toUpperCase())
            .map((book, index) => (
              <BookCard
                book={book}
                key={index}
                genre={genre}
                styling={styling}
                imgStyle={imgStyle}
                titleStyle={titleStyle}
              />
            ))}
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          <Button variant="light" onClick={handleShow}>
            Add your own book in this list!!
          </Button>
        </Card.Footer>
        <AddModal handleClose={handleClose} show={show} genre={genre}/>
      </Card>
    </>
  );
};


export default GenreBooks;
