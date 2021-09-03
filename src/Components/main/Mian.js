import React from "react";
import HornedBeasts from "./HornedBeasts";
// import HornsData from "./HornsData.json";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {this.props.HornsData.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                imgUrl={item.image_url}
                description={item.description}
                handleShow = {this.props.handleShow}
                updateData = {this.props.updateData}
              />
            );
          })}
        </Row>
      </>
    );
  }
}

export default Main;
