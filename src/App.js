import React from "react";
import ImageCard from "./components/ImageCard";
import { imagesData } from "./components/imagesData";
import "./styles/App.css";

class App extends React.Component {
  state = {
    images: [],
    backgroundImages: {},
    score: 0,
    imageHolder: [],
    // showImage:false,
  };
  updateScore = () => {
    this.setState((prevState) => {
      return { score: prevState.score + 1 };
    });
  };
  updateImageHolder = (index, url) => {
    this.setState((prevState) => {
      return {
        //using destructing to pass in the parameters index and url
        imageHolder: [...prevState.imageHolder, { index, url }],
        // showImage:true,
      };
    });
  };

  clearImageHolder = () => {
    this.setState({
      imageHolder: [],
    });
  };

  componentDidMount() {
    let imageDuplicte = [...imagesData.images, ...imagesData.images];
    //sort the imageDuplicate in random order// not sorting after map because react will not
    //know where the keys are when it re renders
    imageDuplicte.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    this.setState({
      images: imageDuplicte,
      backgroundImages: imagesData.backgroungImages,
    });
  }
  render() {
    const imageGrid = this.state.images.map((image, index) => {
      return (
        <ImageCard
          key={index}
          index={index}
          image={image}
          backgroundImages={this.state.backgroundImages}
          updateImageHolder={this.updateImageHolder}
          clearImageHolder={this.clearImageHolder}
          imageHolder={this.state.imageHolder}
          updateScore={this.updateScore}
          // showImage={this.state.showImage}
        />
      );
    });


    return (
      <div className="App">
        <div>
          <span>count:</span> <span>{this.state.score}</span>
          <p>{this.state.score === 12 &&'Congratulation you Win!!!'}</p>
        </div>
        <div className="appImages">{imageGrid}</div>
      </div>
    );
  }
}

export default App;
