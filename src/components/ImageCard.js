import React from "react";
import checkForMatch from'./Images'

class ImageCard extends React.Component {
  

  imageFlip = () => {

    let id = document.getElementById(this.props.id);

    // disable the element after clicking
    id.style.pointerEvents = "none";
    id.setAttribute("src", this.props.img);


   
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
