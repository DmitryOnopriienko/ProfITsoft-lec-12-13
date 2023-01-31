import React from "react";
import History from "../../../components/History";
import {Button, ButtonGroup, TextField} from "@mui/material";
import {createActionButtons, createDeleteButtons, createNumButtons} from "../../../ButtonsCreate";
import {evaluate} from "../../../Calculations";
import {connect} from "react-redux";
import examplesActions from "../actions/examples";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      out: "0",
      history: [],
    };
    this.clickNumber = this.clickNumber.bind(this);
    this.clickAction = this.clickAction.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
  }

  render() {
    const {
      history,
      out: output
    } = this.state
    const {
      examples,
    } = this.props;

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
                variant="contained"
                aria-label="outlined button group"
            >
              {createActionButtons(this.clickAction)}
            </ButtonGroup>
          </div>
          <div className="deleting-buttons">
            {createDeleteButtons(this.clickDelete)}
          </div>
          <div className="num-buttons">
            {createNumButtons(this.clickNumber)}
          </div>
          <Button
              sx={{
                margin: 0.5,
                width: 210,
              }}
              variant="contained"
              onClick={() => examplesActions.fetchExamples({
                examplesCount: 4,
              })(this.props.dispatch)}
          >
            Get and Solve
            {!examples.isLoading &&
                this.solveExamplesFromBackend(examples.list)}
          </Button>
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

  clickDelete(deleteAction) {
    if (deleteAction === "C") {
      this.setState({
        out: "0"
      });
    }
  }

  solveExamplesFromBackend(examples) {
    const {
      history,
    } = this.state;
    for (let i = 0; i < examples.length; i++) {
      let example = examples[i];
      const result = evaluate(example);
      example += "=" + result;
      history.push(example);
    }
    this.props.examples.list = [];
  }
}

const mapReduxStateToProps = reduxState => ({
  ...reduxState,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapReduxStateToProps, mapDispatchToProps)(Calculator);