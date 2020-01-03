
import React, { Component } from 'react'
import './timer.css'

export default class Timer extends Component {

    constructor(props){
        super(props)
        
        this.state={
        time:0,         
        hours:0,
        minutes:0, 
        secondes:0,
        isOn:false,

        }

        setInterval(
            () =>{
                if(this.state.isOn)
{
           this.setState({
            
              time:this.state.time+1,

             hours: Math.floor (this.state.time /3600),
             minutes: Math.floor( this.state.time % 3600 / 60),
             secondes : Math.floor(this.state.time % 60) 
             

            })
            }}, 1000)
    }

    Start =()=> {
        this.setState ({isOn: ! (this.state.isOn)})
        }
    Reset=()=> {
        this.setState({
            time:0,
            hours:0,
            minutes:0, 
            secondes:0,
            isOn:false   
    })
}

    render() {
        return (
            <div className="timer">

             <div className="time-nombre">
             {String(this.state.hours).padStart(2,'0')}:
             {String(this.state.minutes).padStart(2,'0')}:
             {String(this.state.secondes).padStart(2,'0')}
             
                            
              
               </div>
              <div className="time-text">
                    <div> hours</div>
                    <div> minutes</div>
                    <div> secondes</div>

              </div>
              

                            
              <div className="bouton">
              <button className="bouton1" onClick={this.Start}>start</button>
              
              <button className="bouton2" onClick={this.Reset}>reset</button>
              </div>
            </div>
        )
    }
}


