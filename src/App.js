import React from "react";
import {ButtonGroup, TextField} from "@mui/material";
import {createActionButtons, createNumButtons} from "./ButtonsCreate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "0",
    };
  }

  render() {
    return (
        <div className="app">
          <div className="output">
            <TextField
                id="outlined-basic"
                // label="Calculations"
                variant="outlined"
                defaultValue={this.state.output}
                className="text-field"
            />
          </div>
          <div className="action-buttons">
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                // fullWidth={true}
            >
              {createActionButtons()}
            </ButtonGroup>
          </div>
          <div className="buttons">
            {createNumButtons()}
          </div>
        </div>
    );
  }
}

export default App;
