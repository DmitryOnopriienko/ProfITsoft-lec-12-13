import {Button} from "@mui/material";
import React from "react";

const createActionButtons = () => {
  const actionSymbols = ["+", "-", "*", "/", "="];
  const actionButtons = [];
  for (let i = 0; i < actionSymbols.length; i++) {
    const symb = actionSymbols[i];
    let color = "primary";
    if (symb === "=") {
      color = "error";
    }
    actionButtons.push(
        <Button
            variant="contained"
            color={color}
            key={i}
            fullWidth={true}
        >
          {symb}
        </Button>
    );
  }
  return actionButtons;
}

const createNumButtons = () => {
  const buttons = [];
  for (let i = 9; i >= 0; i--) {
    buttons.push(
        <Button
            sx={{
              margin: 0.5,
            }}
            variant="contained"
            color="primary"
            key={i}
            className="button"
        >
          {i}
        </Button>
    );
  }
  return buttons;
}

export {createActionButtons, createNumButtons};