import React, { Component } from "react";
import "./header.scss";
import Canvas from "./presentational/canvas";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor1: "true",
      cursor2: "false",
      cursor3: "false",
      change: false,
      writ: "",
      txt: this.props.text.txt,
      txt2: props.text.txt2,
      txt3: props.text.txt3
    };
  }

  componentDidMount() {
    this.writingAnim();
  }

  componentWillReceiveProps() {
    console.log(this.props.text.txt);
    this.setState({
      cursor1: "true",
      cursor2: "false",
      cursor3: "false",
      change: !this.state.change
    });
    this.writingAnim();
  }
  writingAnim = props => {
    const writinArea = this.refs.writing;
    const writinArea2 = this.refs.writing2;
    const spnCursor = this.refs.cursor;
    const spnCursor2 = this.refs.cursor2;
    const writinArea3 = this.refs.writing3;
    const spnCursor3 = this.refs.cursor3;
    let indexText = 0;
    let indexText2 = 0;
    let indexText3 = 0;
    const time = 10;

    const addLetter1 = () => {
      const txt = this.state.txt;
      // writinArea.textContent += txt[indexText];
      this.setState({
        writ: (this.state.writ += txt[indexText])
      });
      console.log(this.state.writ, txt[indexText]);
      indexText++;
      if (indexText === txt.length) {
        clearInterval(indexTyping);

        setTimeout(function() {
          changeCursor1();
          changePara2();
        }, 2000);
      }
    };

    const changePara2 = () => {
      const addLetter2 = () => {
        const txt2 = this.state.txt2;
        writinArea2.textContent += txt2[indexText2];
        indexText2++;
        if (indexText2 === txt2.length) {
          clearInterval(indexTyping2);
          setTimeout(function() {
            changeCursor2();
            changePara3();
          }, 2000);
        }
      };
      const cursorAnimation1 = () => {
        spnCursor2.classList.toggle("active");
      };
      const indexTyping2 = setInterval(addLetter2, time);
      setInterval(cursorAnimation1, 400);
    };

    const changePara3 = () => {
      const addLetter3 = () => {
        const txt3 = this.state.txt3;
        writinArea3.textContent += txt3[indexText3];
        indexText3++;
        if (indexText3 === txt3.length) {
          clearInterval(indexTyping3);
        }
      };
      const cursorAnimation2 = () => {
        spnCursor3.classList.toggle("active");
      };
      const indexTyping3 = setInterval(addLetter3, time);
      setInterval(cursorAnimation2, 400);
    };

    const changeCursor1 = () => {
      this.setState({
        cursor1: "false",
        cursor2: "true"
      });
    };

    const changeCursor2 = () => {
      this.setState({
        cursor2: "false",
        cursor3: "true"
      });
    };

    const cursorAnimation = () => {
      spnCursor.classList.toggle("active");
    };

    const indexTyping = setInterval(addLetter1, time);
    setInterval(cursorAnimation, 400);
  };

  render() {
    const scrollChange = {
      opacity: `${0 + this.props.scroll / 698}`,
      filter: `grayscale(${(2 * this.props.scroll) / 698})`
    };
    const scrollDefault = {
      opacity: `0`,
      filter: "grayscale(0)"
    };
    return (
      <div className="headerSectionFix" id="home">
        <div className="headerSection">
          <div
            style={this.props.scroll < 50 ? scrollDefault : scrollChange}
            className="scrollArea"
          />
          <div className="nightSkyPic">
            <div className="nightSky" />
          </div>
          <div className="headerTextArea">
            <div className="headerTextAreaPara">
              <p className="nameText1" ref="writing">
                {" "}
                {this.state.writ}
              </p>
              <span
                className={
                  this.state.cursor1 === "true" ? "cursor cursor1" : "hide"
                }
                ref="cursor"
              >
                _
              </span>
            </div>
            <div className="headerTextAreaPara">
              <p className="nameText2" ref="writing2" />
              <span
                className={
                  this.state.cursor2 === "true" ? "cursor cursor2" : "hide"
                }
                ref="cursor2"
              >
                _
              </span>
            </div>
            <div className="headerTextAreaPara">
              <p className="nameText3" ref="writing3" />
              <span
                className={
                  this.state.cursor3 === "true" ? "cursor cursor3" : "hide"
                }
                ref="cursor3"
              >
                _
              </span>
            </div>
          </div>
          <div className="canvasSection">
            {this.props.scroll < 880 ? <Canvas /> : null}
          </div>
          <div className="bcgPicture">
            <img
              src={process.env.PUBLIC_URL + "/img/mountain2.png"}
              alt="mountains"
              className="headerImg"
            />
          </div>
          <i className="fas fa-arrow-circle-down arrowAnim" />
        </div>
      </div>
    );
  }
}

export default Header;
