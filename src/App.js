import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/main/Mian";
import SelectedBeats from "./Components/SelectedBeats";
import HornsData from "./Components/main/HornsData.json";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      show : false,
      title : "",
      imgUrl : "",
      description :""
    }
  }

  handleShow = ()=>{
    this.setState({
    show : true  
    })
  }

  handleClose = ()=>{
    this.setState({
      show : false
    })
  }

  updateData = (title, imgUrl, description)=>{
    this.setState({
      title : title,
      imgUrl : imgUrl,
      description : description
    });
    
  }

  render(){
    return(
      <>
      <Header/>
      <Main
      HornsData={HornsData}
      handleShow = {this.handleShow}
      updateData = {this.updateData}
      />
      <SelectedBeats
      handleShow = {this.state.show}
      handleClose = {this.handleClose}
      title = {this.state.title}
      imgUrl = {this.state.imgUrl}
      description = {this.state.description}
      />
      <Footer/>
      </>
    )
  }
};

export default App 