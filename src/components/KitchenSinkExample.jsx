import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

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
    <Card className="d-flex justify-content-center" style={{ width: "28rem" }}>
      <Card.Img variant="top" src={picture?.large} />
      <Card.Body>
        <Card.Title className="fs-1 text-warning">Users</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <h2>
          {" "}
          {name?.title} {name?.first} {name?.last}
        </h2>
        <h4 className="text-secondary p-1">{email}</h4>
        <h4 className="text-secondary p-1">
          {new Date(dob?.date).toLocaleDateString("tr-TR")}
        </h4>
        <h3 className="p-2">
          <AiOutlineMail />
          <BsFillTelephoneFill />
          <AiOutlineLinkedin />
        </h3>
      </ListGroup>
      <button
        className="btn btn-dark rounded-pill mb-2  "
        onClick={getUser}
      >
        Get User
      </button>
    </Card>
  );
}

export default KitchenSinkExample;

