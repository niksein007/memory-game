import React from 'react'
class checkForMatch extends React.Component {
    state = {
      cardsChosen: [],
      cardsChosenId: [],
      cardsWon: [],
    };
componentDidMount(){
    this.setState(
        { cardsChosen: [...this.state.cardsChosen, this.props.name] },
        () => {
          console.log(this.state.cardsChosen);
         console.log(this.state.cardsChosen);
          if (this.state.cardsChosen.length === 2) {
  
          }
        }
      );
    }
    render(){
        return(
            <div></div>
        )
    }
}
export default checkForMatch