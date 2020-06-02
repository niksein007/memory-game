import React from "react";

class ImageCard extends React.Component {
  

  imageFlip = (e) => {
 let image = e.target;
    // let image = document.getElementById(this.props.id);

    // disable the element after clicking
    image.style.pointerEvents = "none";
    image.setAttribute("src", this.props.img);
    //calling the handleState method to reference and change the same state 
    //if the state was in this component it will be referencing a new state 
    //each time the image was clicked
    this.props.handleState(this.props.name,this.props.id)


   
  };
  render() {
    return (
      <img
        className="ImageCard"
        id={this.props.id}
        onClick={this.imageFlip}
        alt=""
      />
    );
  }
}

export default ImageCard;
