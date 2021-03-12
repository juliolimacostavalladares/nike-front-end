import {useEffect, useState} from 'react'
import {InputGroup, Card, Container, Row, Col} from 'react-bootstrap/'

function CardsProducts() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/json")
      .then((response) => response.json())
      .then((data) => setApi(data));
  }, [])
  console.log(api)
  
  return (
    <Container>
      <Row>
        {api.map(i => (
          <Col className="mt-2">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{i.name}</Card.Title>
                <Card.Title>{`${i.data.month}/${i.data.day}`}</Card.Title>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </Card.Body>
              <Card.Img variant="top" src={i.img} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
  );
}

export default CardsProducts;
