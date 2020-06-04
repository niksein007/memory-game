import React from "react";
import ImageCard from "./components/ImageCard";
import { imagesData } from "./components/imagesData";
import "./styles/App.css";

class App extends React.Component {
  state = {
    images: imagesData.images,
    backgroundImages: imagesData.backgroungImages,
  };

  render() {
    let imageHolder = [];
    //the img is the obj targeted using e.target in imageCard.js
    const checkLogic = (img, url) => {
      imageHolder = [...imageHolder, { url: url, img: img }];
      console.log(imageHolder);
      if (imageHolder.length === 2) {
        if (imageHolder[0].url === imageHolder[1].url) {
          imageHolder[0].img.setAttribute("src", this.state.backgroundImages.whiteBg.url);
          imageHolder[0].img.setAttribute("alt", this.state.backgroundImages.whiteBg.name);

          imageHolder[1].img.setAttribute("src", this.state.backgroundImages.whiteBg.url);
          imageHolder[1].img.setAttribute("alt", this.state.backgroundImages.whiteBg.name);
          
        } else {
          imageHolder[0].img.setAttribute("src", this.state.backgroundImages.mainBg.url);
          imageHolder[0].img.setAttribute("alt", this.state.backgroundImages.mainBg.name);
          imageHolder[0].img.style.pointerEvents = "auto";

          imageHolder[1].img.setAttribute("src", this.state.backgroundImages.mainBg.url);
          imageHolder[1].img.setAttribute("alt", this.state.backgroundImages.mainBg.name);
          imageHolder[1].img.style.pointerEvents = "auto";
        } 
         // clear imageHolder
      imageHolder=[]
      }else{

        }
      
      }
    

    //creates duplicate images of the images array
    const imageGrid = this.state.images.map((image, index) => {
      let duplicateImg = [];
      for (let i = 0; i < 2; i++) {
        duplicateImg = [
          ...duplicateImg,
          <ImageCard
            key={index + i}
            image={image}
            backgroundImages={this.state.backgroundImages}
            checkLogic={checkLogic}
          />,
        ];
      }
      return duplicateImg;
    });

    return <div className="App">{imageGrid}</div>;
  }
}

export default App;
