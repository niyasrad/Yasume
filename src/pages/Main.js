import React, {Component} from 'react';
import china from '../assets/styles'
import { marked } from "marked";
export default class Second extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input: `# Niyas Hameed
- <niyasrad@gmail.com>
- +91 8148100828
- [https://niyas-hameed-portfolio.vercel.app/](https://niyas-hameed-portfolio.vercel.app/)
- Chennai, India
## Experience
### <span>SAP - ERP Intern (2022), ICF</span> <span>(2022)</span>
- Worked on SAP ERP Code to query information of the employees in ICF.
- Gained experience in handling the factory's HR, Materials Management, and Planning.
### <span>App Developer Intern, The Sparks Foundation</span> <span>(2022)</span>
- Worked on Mobile Applications using Flutter, and SQL (SQLite).
- Made collaborations with peers globally during the intern to make quality cross-platform apps.
## Projects
### <span>DJMAX-PRODUCT</span>
Website on DJMAX-RESPECT V
- Built with focus on front-end technologies and techniques.
- Used Media-Query and built custom nav-bars to make the website responsive.
- Added the columns to redirect to purchase of product.
### <span>MindCare</span>
Mental Health Product
- Built an application that allows users to connect with therapists and track their mental health.
- Pitched it to mental health professionals and received positive feedback.
## Education
### <span>B.Tech AI&DS- Sri Venkateswara College of Engineering</span> <span>(2020-2024)</span>
- CGPA 9.4
- Club Activities: GDSC, The Wealth Society, ACE, Tech Aficionado
## Skills
- Langs: Python, Java, C, C++
- Web development: HTML, CSS, JavaScript, ReactJs, Redux, Sass, Bootstrap
- App development: Kotlin, Jetpack Compose, Flutter
- Tools: Git, Figma`,
            inputfordisp: `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`,
            html: '',
            htmlo: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeW = this.handleChangeW.bind(this)
        this.handleDown = this.handleDown.bind(this);
    }
    componentDidMount(){
        const htmle = marked.parse(this.state.input);
        const htmlo = marked.parse(this.state.inputfordisp)
        this.setState({
            html: htmle,
            htmlo: htmlo
        })
        document.getElementById("preview").innerHTML = htmlo;
        document.getElementById("prev").innerHTML = htmle;
    }
    handleClick() {
        var elmntToView = document.getElementById("secondpage");
        elmntToView.scrollIntoView(); 
    }
    handleChange(e) {
        console.log(this.state.input)
        this.setState({
            input: e.target.value
        });
        const htmle = marked.parse(e.target.value);
        document.getElementById("prev").innerHTML = htmle;
        this.setState({
            html: htmle
        })
    }
    handleChangeW(e) {
        this.setState({
            inputfordisp: e.target.value
        });
        const htmle = marked.parse(e.target.value);
        document.getElementById("preview").innerHTML = htmle;
        this.setState({
            htmlo: htmle
        })
    }
    handleDown() {
        var data_string = JSON.stringify(this.state.html);
        data_string = `<link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="styles.css"></link>`+data_string.replace(/\\n/g, "<br>")
            .replace(/(^"|"$)/g, '')
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f")+`<p>Made with Yasume @Radextrem</p>`;
        var file = new Blob([data_string], {type:"text"});
        var anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(file)
        anchor.download = "Resume.html";
        anchor.click();
    }
    render() {
        return (
            <div className="professional">
                <div className="empty"></div>
                <div className="pages">
                    <h1>Editor</h1>
                    <textarea id="editori" value={this.state.input} class="framer1" onChange={this.handleChange} />
                    <textarea id="editor" value={this.state.inputfordisp} class="framer1" onChange={this.handleChangeW} />
                    <h1>Preview</h1>
                    <div id="prev" className="framer2">
                    </div>
                    <div id="preview" className="framer2">
                    </div>
                </div>
                <button onClick={this.handleDown}>Download HTML</button>
                <button><a href={china} download="styles.css" >Download CSS*</a></button>
            </div> 
                    
        );
    }
}
