import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addToBuy,
  addToRead,
  deletefrombuy,
  deletefromread,
} from "../Js/Action/Actions";

const BookCard = ({ book, genre, styling, imgStyle, titleStyle }) => {
  styling(genre);
  const dispatch = useDispatch();
  const [isBought, setIsBought] = useState(false);
  const [isListAdded, setIsListAdded] = useState(false);
  const addingtobuy = () => {
    dispatch(addToBuy(book.cost));
    setIsBought(!isBought);
  };
  const addingtolist = () => {
    dispatch(addToRead(book.title));
    setIsListAdded(!isListAdded);
  };
  const deletingfrombuy = () => {
    dispatch(deletefrombuy(book.cost));
    setIsBought(!isBought);
  };
  const deletingfromread = () => {
    dispatch(deletefromread(book.title));
    setIsListAdded(!isListAdded);
  };

  return (
    <div className="col-12 w-100 border-bottom m-2">
      <Card style={{ width: "18rem" }} className="w-100 border-0">
        <div className="row justify-content-center w-100">
          <div className="col-md-4 col-sm-12">
            <Card.Img variant="top" src={book.cover} className={imgStyle} />
          </div>
          <Card.Body className="  col-md-8 col-sm-12">
            <Card.Title className={titleStyle} style={{ fontSize: "28px" }}>
              {book.title}
            </Card.Title>
            <Card.Text
              className="blockquote-footer"
              style={{ fontSize: "larger" }}
            >{`by ${book.author}`}</Card.Text>
            <Card.Text>{book.review}</Card.Text>
            <Card.Text>{`price ${book.cost}$`}</Card.Text>
            <Button
              variant="dark"
              className="mr-5"
              onClick={() =>
                isListAdded ? deletingfromread() : addingtolist()
              }
            >
              {isListAdded ? "delete from my list" : "Add to my list"}
            </Button>
            <Button
              variant="dark"
              onClick={() => (isBought ? deletingfrombuy() : addingtobuy())}
            >
              {isBought ? "I don't want it" : "Add To Buy"}
            </Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default BookCard;
