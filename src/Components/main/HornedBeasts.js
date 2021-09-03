import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: 0,
    };
  }

  increaseFav = () => {
    this.setState({
      fav: this.state.fav + 1,
    });

    this.props.handleShow();
    this.props.updateData(
      this.props.title,
      this.props.imgUrl,
      this.props.description
    )

  };

  render() {
    return (
      <>
        <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.imgUrl} onClick={this.increaseFav} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>fav : {this.state.fav}</Card.Text>
            <Button variant="primary">Display</Button>
          </Card.Body>
        </Card>
        </Col>
      </>
    );
  }
}
export default HornedBeasts;
