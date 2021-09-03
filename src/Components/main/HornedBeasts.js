import React from "react";
class HornedBeasts extends React.Component{
    render(){
        return(
            <>
            <h2></h2>
            <img src = {this.props.imgUrl} alt={this.props.title} title={this.props.title} width="400px"/>
            <p>{this.props.description}</p>
            </>
        )
    }
}
export default HornedBeasts;