import React from "react";

const ImageCard = (props) => {
  const flipImage = (e) => {
    // console.log(e.target)
    let img = e.target;
    img.style.pointerEvents = "none";
    img.setAttribute("src", props.image.url);
    img.setAttribute("alt", props.image.name);
    //delaying the checkLogic funtion so that the image always shows Note:use an anonimous function
    setTimeout(()=> props.checkLogic(img, props.image.url,),500,)
    

  };
  return (
    <img
      className="ImageCard"
      onClick={(e) => flipImage(e)}
      src={props.backgroundImages.mainBg.url}
      alt={props.backgroundImages.mainBg.name}
    />
  );
};

export default ImageCard;
