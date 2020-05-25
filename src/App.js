import React from "react";
import "./styles/App.css";

import apple from "./components/images/apple.png";
import cabbage from "./components/images/cabbage.png";
import corn from "./components/images/corn.png";
import cupCake from "./components/images/cup-cake.png";
import mainBbg from "./components/images/main-bg.png";
import popCorn from "./components/images/pop-corn.png";
import cup from "./components/images/cup.png";
import whiteBg from "./components/images/white-bg.png";

import ImageCard from "./components/ImageCard";

class App extends React.Component {
  state = {
    cardsChosen: [],
    cardsChosenId: [],
    cardsWon: [],
    images: [
      { name: "apple", img: apple },
      { name: "cabbage", img: cabbage },
      { name: "corn", img: corn },
      { name: "cupCake", img: cupCake },
      { name: "popCorn", img: popCorn },
      { name: "cup", img: cup },
      { name: "apple", img: apple },
      { name: "cabbage", img: cabbage },
      { name: "corn", img: corn },
      { name: "cupCake", img: cupCake },
      { name: "popCorn", img: popCorn },
      { name: "cup", img: cup },
    ],
  };
  checkForMatch = () => {
    let cards = document.querySelectorAll("img");
    let resultDisplay = document.getElementById("result");

    const firstPicId = this.state.cardsChosenId[0];
    const secondPicId = this.state.cardsChosenId[1];
    console.log(firstPicId);
    console.log(secondPicId);

    if (this.state.cardsChosen[0] === this.state.cardsChosen[1]) {
      cards[firstPicId].setAttribute("src", whiteBg);
      cards[secondPicId].setAttribute("src", whiteBg);
      this.setState(
        { cardsWon: [...this.state.cardsWon, this.state.cardsChosen] },
        () => {}
      );
    } else {
      // set back to normal
      cards[firstPicId].setAttribute("src", mainBbg);
      cards[secondPicId].setAttribute("src", mainBbg);
      // reset pointer events
      cards[firstPicId].style.pointerEvents = "auto";
      cards[secondPicId].style.pointerEvents = "auto";
    }
    // set the two variables to empty
    this.setState({ cardsChosen: [] });
    this.setState({ cardsChosenId: [] });

    // displaying results
    resultDisplay.textContent = this.state.cardsWon.length;
    if (this.state.cardsWon.length === this.state.images.length / 2) {
      resultDisplay.textContent = "Congratulations You have Won!!!";
    }
  };

  handleState = (name, id) => {
    this.setState({ cardsChosenId: [...this.state.cardsChosenId, id] }, () => {
      console.log(this.state.cardsChosenId);
    });
    this.setState({ cardsChosen: [...this.state.cardsChosen, name] }, () => {
      console.log(this.state.cardsChosen);
      if (this.state.cardsChosen.length === 2) {
        console.log(this.state.cardsChosen);

        setTimeout( this.checkForMatch(),500)
      }
    });
  };

  render() {
    const imageCard = this.state.images.map((value, key) => {
      //  console.log(value.name);

      return (
        <ImageCard
          handleState={this.handleState}
          key={key}
          id={key}
          name={value.name}
          img={value.img}
        />
      );
    });

    return (
      <div className="App">
        <h5>
          Score:<span id="result"></span>
        </h5>
        <div className="grid">{imageCard}</div>
      </div>
    );
  }
}

export default App;
