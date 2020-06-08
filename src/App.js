import React from "react";
import ImageCard from "./components/ImageCard";
import { imagesData } from "./components/imagesData";
import TimeCard from "./components/TimeCard";
import "./styles/App.css";

class App extends React.Component {
  state = {
    images: [],
    backgroundImages: {},
    score: 0,
    imageHolder: [],
    btnsClicked: 0,
    timeCounter: 0,
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

  updateBtnsClicked = () => {
    // console.log("hii");
    this.setState((prevState) => {
      return { btnsClicked: prevState.btnsClicked + 1 };
    });
  };

  reset = () => {
    window.location.reload();
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
    ///////////////////////////////////////////////
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
          updateBtnsClicked={this.updateBtnsClicked}
          // showImage={this.state.showImage}
        />
      );
    });

    return (
      <div className="App">
        <div className="counter">
          <span className="counter-label">Score:</span>{" "}
          <span className="counter-value">{this.state.score}</span>
          <span className="counter-label">Time:</span>{" "}
          <span className="counter-value">
            {this.state.btnsClicked > 0 ? (
              <TimeCard score={this.state.score} btnsClicked={this.state.btnsClicked} />
            ) : (
              0
            )}
          </span>
          <p className="winMsg">
            {this.state.score === 12 && "Congratulation you Win!!! "}
          </p>
        </div>
        <div className="appImages">{imageGrid}</div>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
