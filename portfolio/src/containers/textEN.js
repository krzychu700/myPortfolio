import React, { Component } from "react";
import "./header.scss";

export default class TextEN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor1: "true",
      cursor2: "false",
      cursor3: "false",
      change: false,
      writ: "",
      writ2: "",
      writ3: "",
      txt: "Hello",
      txt2: "I'm Krzysztof Szypulski",
      txt3: "< Junior Front-end developer />"
    };
  }

  componentDidMount() {
    this.writingAnim();
  }

  writingAnim = () => {
    const spnCursor = this.refs.cursor;
    const spnCursor2 = this.refs.cursor2;
    const spnCursor3 = this.refs.cursor3;
    let writ = [...this.state.writ];
    let writ2 = [...this.state.writ2];
    let writ3 = [...this.state.writ3];
    let indexText = 0;
    let indexText2 = 0;
    let indexText3 = 0;
    const time = 10;

    const addLetter1 = () => {
      const txt = this.state.txt;
      this.setState({
        writ: [(writ += txt[indexText])]
      });
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
        this.setState({
          writ2: [(writ2 += txt2[indexText2])]
        });
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
        this.setState({
          writ3: (writ3 += txt3[indexText3])
        });
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
    return (
      <div className="headerTextArea">
        <div className="headerTextAreaPara">
          <p className="nameText1">{this.state.writ}</p>
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
          <p className="nameText2"> {this.state.writ2}</p>
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
          <p className="nameText3"> {this.state.writ3}</p>
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
    );
  }
}
