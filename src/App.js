import React from "react";
import {ButtonGroup, TextField} from "@mui/material";
import {createActionButtons, createNumButtons} from "./ButtonsCreate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      out: "0"
    };
    this.clickNumber = this.clickNumber.bind(this);
    this.clickAction = this.clickAction.bind(this);
  }

  render() {
    const {
      out: output
    } = this.state;

    return (
        <div className="app">
          <div className="output">
            <TextField
                id="outlined-basic"
                variant="outlined"
                value={output}
                className="text-field"
            />
          </div>
          <div className="action-buttons">
            <ButtonGroup
                sx={{
                  background: "darkslategray",
                  borderColor: "darkslategray",
                }}
                variant="contained"
                aria-label="outlined button group"
            >
              {createActionButtons(this.clickAction)}
            </ButtonGroup>
          </div>
          <div className="num-buttons">
            {createNumButtons(this.clickNumber)}
          </div>
        </div>
    );
  }

  clickNumber(num) {
    const {
      out
    } = this.state;
    if (out === "0") {
      this.setState({
        out: "" + num,
      });
    } else {
      this.setState({
        out: out + num,
      });
    }
  }

  clickAction(action) {
    let {
      out
    } = this.state;
    console.log("clickAction:" + action);
    
    if (action === "=") {
      if (out.match(/\d+[+\\\-*/]\d+/)) {
        console.log(out)
      }
      return;
    }

    if (out.match(/\d+[+\\\-*/]/)) {
      out = out.slice(0, out.length - 1);
    }

    this.setState({
      out: out + action,
    });
  }
}

export default App;
