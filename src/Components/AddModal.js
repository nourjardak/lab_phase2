import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToShare } from "../Js/Action/Actions";

const AddModal = ({ handleClose, show, genre }) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [review, setReview] = useState("")
    const [cover, setCover] = useState("")
    const [cost, setCost] = useState(0)
    const type=genre
    const dispatch = useDispatch()

    const handleSaves=()=>{
      if(!title){
        alert("please enter a valid title")
      }else if(!author){
        alert("please enter a valid author name")
      }else if(!review){
        alert("please enter a valid review")
      }else if(!cover){
        alert("please enter a valid cover URL")
      }else if(!cost||cost<=0){
        alert("please enter a valid book price (must be a positive number above 0)")
      }else{
        dispatch(addToShare({title:title,author:author,review:review,cover:cover,cost:Number(cost),type:type}))
        handleClose()
        setTitle("")
        setAuthor("")
        setReview("")
        setCover("")
        setCost(0)
      }  
    }
    const handleClosing=()=>{
      handleClose()
      setTitle("")
      setAuthor("")
      setReview("")
      setCover("")
      setCost(0)
    }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Text className="text-muted">
              {`Add the favourite ${genre} book you read`} 
            </Form.Text>
            <Form.Group>
              <Form.Label>book title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the book title"
                onChange={(e)=>setTitle(e.target.value)} 
                value={title}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>book author</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter the book's author"
                onChange={(e)=>setAuthor(e.target.value)}
                value={author}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>book's review</Form.Label>
              <Form.Control as="textarea" rows={5} onChange={(e)=>setReview(e.target.value)} value={review} />
            </Form.Group>

            <Form.Group>
              <Form.Label>book cover</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter the book's cover URL"
                onChange={(e)=>setCover(e.target.value)}
                value={cover}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>book's price</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter the book's price"
                onChange={(e)=>setCost(e.target.value)}
                value={cost}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosing}>
            Close
          </Button>
          <Button variant="dark" onClick={handleSaves}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;
