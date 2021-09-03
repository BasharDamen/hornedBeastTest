import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeats extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.handleShow} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.imgUrl} width = "100%"/>
            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeats;
