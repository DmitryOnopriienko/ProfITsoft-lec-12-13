import {Button} from "@mui/material";
import React from "react";

const createActionButtons = (clickAction) => {
  const actionSymbols = ["+", "-", "*", "/", "="];
  const actionButtons = [];
  for (let i = 0; i < actionSymbols.length; i++) {
    const symbol = actionSymbols[i];

    let color = (symbol === "=") ? "#f99806" : "darkslategrey";

    actionButtons.push(
        <Button
            sx={{
              background: color,
              borderColor: "darkslategrey",
            }}
            variant="contained"
            key={i}
            fullWidth={true}
            onClick={() => clickAction(symbol)}
        >
          {symbol}
        </Button>
    );
  }
  return actionButtons;
}

const createNumButtons = (clickNumber) => {
  const buttons = [];
  for (let i = 9; i >= 0; i--) {
    buttons.push(
        <Button
            sx={{
              margin: 0.5,
              background: "darkslategrey",
            }}
            variant="contained"
            // color="primary"
            key={i}
            className="num-button"
            onClick={() => clickNumber(i)}
        >
          {i}
        </Button>
    );
  }
  return buttons;
}

export {createActionButtons, createNumButtons};