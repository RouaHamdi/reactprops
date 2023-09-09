import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
return (
    <Card style={{ width: "10rem", margin: "10px", textAlign: "center" }}>
        <Card.Img variant="top" src={https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bKfb5q1CpSDLWICEnkT29eFiFuTC-ctNn8stciWu7g&s} />
        <Card.Body>
            <Card.Title>{crestiano ronaldo}</Card.Title>
            <Card.Text>
                Team: {al nasser football team}<br />
                Nationality: {portugais}<br />
                Jersey Number: {7}<br />
                Age: {38}
        </Card.Text>
        </Card.Body>
    </Card>
);
};

export default Player;