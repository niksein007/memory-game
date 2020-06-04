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
    // console.log(this.state.images);

    const imageGrid = this.state.images.map((image, index) => {
      let duplicateImg = [];
      for (let i = 0; i < 2; i++) {
        duplicateImg = [
          ...duplicateImg,
          <ImageCard
            key={index + i}
            image={image}
            backgroundImages={this.state.backgroundImages}
          />,
        ];
      }
      return duplicateImg;
    });

    return <div className="App">{imageGrid}</div>;
  }
}

export default App;
