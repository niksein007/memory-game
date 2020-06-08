import React from "react";

class ImageCard extends React.Component {
  // using state to set src and alt enables the new states(alt/src)to be availble when rerender
  // is done because setState was called
  constructor(props) {
    super(props);
    // console.log("constructor");

    this.state = {
      src: this.props.image.url,
      alt: this.props.image.name,
      pointerEvents: "auto",
      showImage: false,
      backgroundImage: this.props.backgroundImages.mainBg.url,
      
    };
  }
  ////////////////////////////////////////////////////
//   updateTimeCounter=()=>{
//     setInterval(()=>{
//       this.setState((prevState)=>{
//        return {timeCount:prevState.timeCount + 1}
//       })
//     },1000)
// console.log('counting');  
//   }

///////////////////////////////////////////////////////
  flipImage = (e) => {
    // console.log(e.target)
    this.setState((prevState) => {
      return { pointerEvents: "none", showImage: !prevState.showImage };
    });
    this.props.updateImageHolder(this.props.index, this.props.image.url);
    this.props.updateBtnsClicked()
  };
/////////////////////////////////////////////////////////
  checkLogic = () => {
    // console.log(this.props.imageHolder);
    let imageHolder = this.props.imageHolder;
   
    if (
      imageHolder.length === 2 &&
      imageHolder[0].url === imageHolder[1].url &&
      this.props.image.url === imageHolder[0].url
    ) {
      // console.log("yes");
      this.setState((prevState) => {
        return {
          showImage: !prevState,
          backgroundImage: this.props.backgroundImages.whiteBg.url,
        };
      });
      //delaying the time to 2ms for clearImageHolder to run
      // this.props.clearImageHolder();
      this.props.updateScore();
      setTimeout(()=>{this.props.clearImageHolder()},200)

    } else if (
      imageHolder.length === 2 &&
      imageHolder[0].url !== imageHolder[1].url
    ) {
      if (
        this.props.index === imageHolder[0].index ||
        this.props.index === imageHolder[1].index
      ) {
        // console.log("not the same" + this.props.index+this.props.imageHolder );
        this.setState((prevState) => {
          return {
            pointerEvents: "auto",
            showImage: !prevState,
          };
        });
      }

      setTimeout(()=>{this.props.clearImageHolder()},200)
      // this.props.clearImageHolder();
    }
  };
////////////////////////////////////////////////////////////////

  componentDidUpdate() {
    // console.log("did update");
    //delaying the time for cheecKLogic() to run for 5ms 
    // the setTimeout() in the checkLogic() and componentDidUpdate() allows the 
    //images to show before disapearing
    setTimeout(()=>{this.checkLogic()}, 500);
  }
  componentDidMount() {
    // console.log("did mount");
  }
  render() {
    return (
      <div
        onClick={this.flipImage}
        className="ImageCard"
        style={{
          backgroundImage: `url(${this.state.backgroundImage})`,
          pointerEvents: this.state.pointerEvents,
        }}
      >
        {this.state.showImage ? (
          <img
            src={this.state.src}
            alt={this.state.alt}
            style={{ pointerEvents: this.state.pointerEvents }}
          />
        ) : undefined}
      </div>
    );
  }
}

export default ImageCard;
