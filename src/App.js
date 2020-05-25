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
    cardsChosen:[],
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

  render() {
    const imageCard = this.state.images.map((value, key) => {
      //  console.log(value.name);

      return <ImageCard test={this.test} key={key} id={key} name={value.name} img={value.img} />;
    });

    return (
      <div className="App">
        <div className="grid">{imageCard}</div>

      </div>
    );
  }
}

export default App;
