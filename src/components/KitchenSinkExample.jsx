import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function KitchenSinkExample() {
  const [user, setUser] = useState("");
  
  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };
  
  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
    const { name, dob, email, picture } = user;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className="">Users</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <h2>ss</h2>
        <h2>ww</h2>
        <ListGroup.Item>
          {new Date(dob?.date).toLocaleDateString("tr-TR")}
        </ListGroup.Item>
        <ListGroup.Item>ss</ListGroup.Item>
      </ListGroup>
      <button className="btn btn-primary" onClick={getUser}>
      Get User
      </button>
    </Card>
  );
}

export default KitchenSinkExample;

