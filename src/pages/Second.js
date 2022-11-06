import React, {Component} from 'react';
import frame from '../assets/frame1.png'


export default class Second extends Component {

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
            <div id="secondpage" className="heropage">
                <div className="empty"></div>
                <div className="firstSentence">
                    <div className="framer1">
                        <h1>How Yasume works</h1>
                        <p>
                        Get started by editing over <br></br>the markdown page down below,<br></br> there is a cheat sheet for your reference!<br></br><br></br>After it is complete, download<br></br> both the HTML and CSS files!
                        </p>
                        <button><a href="https://www.markdownguide.org/assets/markdown-cheat-sheet.md" rel="noreferrer" target="_blank">Reference</a></button>
                    </div>
                    <div className="framer2" onClick={this.handleClick}>
                        <img src={frame} alt="" ></img>
                    </div>
                </div>
            </div>         
        );
    }
}