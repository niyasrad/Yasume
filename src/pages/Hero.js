import React, {Component} from 'react';
import eng from '../assets/eng.png'
import down from '../assets/down.png'
import frame from '../assets/frame.png'

export default class Hero extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        var elmntToView = document.getElementById("secondpage");
        elmntToView.scrollIntoView(); 
    }
    render() {
        return (
            <div className="heropage">
                <div className="empty"></div>
                <nav>
                    <img src = {eng} className="logo" alt=""></img>
                </nav>
                <div className="firstSentence">
                    <div className="framer1">
                        <h1>Yasume.</h1>
                        <p>
                        The <b>free-est</b> Resume builder online.<br></br><br></br> Just <b>Relax!</b>  <br></br>We got you covered.
                        </p>
                        <img src={down} onClick={this.handleClick} alt="logo"></img>
                    </div>
                    
                    <div className="framer2" onClick={this.handleClick}>
                        <img src={frame} alt="" ></img>
                    </div>
                </div>
            </div>
        );
    }
}