import React from "react";
import { Card } from "react-bootstrap";
import aboutimg from "../image/girl reading.jpg"

const About = () => {
  return (
    <div className="section1">
      <Card style={{ width: "18rem",border:"none" }} className="container justify-content-center w-100">
        <div className="row"><Card.Body className=" col-md-6 col-sm-12">
          <Card.Title className="titre1">What My Is Blog About...</Card.Title>
          <Card.Text>
          I love reading, I love being immersed in the well-thought of storyline, I love how the adrenaline rushes through my veins everytime a plot twist shows up, I love how I get teleported into another world,place and era, I love discovering new histories,cultures and lifestyles, uncovering myths, deciphering riddles.
          </Card.Text>
          <Card.Text>
          And I feel that I am not the only one who harbours these feelings.
          </Card.Text>
          <Card.Text>
          Therefore I thought why not share my favourite books of every genre I read and reviewed just so we can relish our passion together while exchanging our insights and opinions.
          </Card.Text>
          <Card.Text>
          I hope you enjoy this books'collection and find one that suit your tast to be your next book to read!
          </Card.Text>
        </Card.Body>
        <div className="cardimg  col-md-6 col-sm-12"><Card.Img variant="top" src={aboutimg} className="card-img"/></div>
        </div>
      </Card>
      
    </div>
  );
};

export default About;
