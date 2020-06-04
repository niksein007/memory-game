import React from "react";

const ImageCard = (props) => {
  // console.log(props);
  const flipImage = (e)=>{
    console.log(e.target)
   let img = e.target
    img.style.pointerEvents='none'
    img.setAttribute('src',props.image.url)
    img.setAttribute('alt',props.image.name)

  }

  return (
    <img
      className="ImageCard"
      onClick={(e)=>flipImage(e)}
      src={props.backgroundImages.mainBg.url}
      alt={props.backgroundImages.mainBg.name}
    />
  );
};

export default ImageCard;
