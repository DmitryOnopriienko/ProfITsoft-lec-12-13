import React from "react";
import {ButtonGroup, TextField} from "@mui/material";
import {createActionButtons, createNumButtons} from "./ButtonsCreate";
import {evaluate} from "./Calculations";
import History from "./components/History";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      out: "0",
      history: [],
    };
    this.clickNumber = this.clickNumber.bind(this);
    this.clickAction = this.clickAction.bind(this);
  }

  render() {
    const {
      history,
      out: output
    } = this.state;

    return (
        <div className="app">
          <History history={history} />
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
                  // background: "darkslategray",
                }}
                variant="contained"
                aria-label="outlined button group"
            >
              {createActionButtons(this.clickAction)}
            </ButtonGroup>
          </div>
          <div className="deleting-buttons">
            <ButtonGroup
                variant="contained"
                aria-label="outlined button group"
            >

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
      out,
      history
    } = this.state;

    if (out.match(/\d+\.?\d*[+*/-]\d+/g)) {
      const result = evaluate(out);
      out = out + "=" + result;
      history.push(out);

      if (!result.toString().match(/^[-.0-9]/g)) {
        out = "0";
      } else {
        out = result.toString();
      }

      if (action === "=") {
        this.setState({
          out: out,
        });
        return;
      }
    }

    if (action === "=") {
      return;
    }

    if (out.slice(-1).match(/[+\\\-*/]/)) {
      out = out.slice(0, out.length - 1);
    }

    this.setState({
      out: out + action,
    });
  }
}

export default App;
