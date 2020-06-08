import React from 'react'

class TimeCard extends React.Component{

    state ={
       
        timeCounter:0,
    }
    interval=()=>{
        //using this to bind inervalId to the class. it cant be used ouside an object
     this.intervalId=setInterval(()=>{
        this.setState((prevState)=>{
            return{timeCounter:prevState.timeCounter + 1}
        })
       },1000)
        
    }

    clearInterval=()=>{
        clearInterval(this.intervalId)
        return this.state.timeCounter
    }

    componentDidMount(){
    this.interval()
            // console.log('counting');  
    }
    render(){
        return(
            <span>
               { this.props.score < 12 ? this.state.timeCounter: this.clearInterval()}s
            </span>
        )
        }
}

export default TimeCard