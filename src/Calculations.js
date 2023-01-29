
const evaluate = (expression) => {
  const fullExprRegex = /\d+\.?\d*[+*/-]\d+/g;
  if (!expression.match(fullExprRegex)) {
    return false;
  }

  const digitRegex = /-?\d+\.?\d*/g;
  const signRegex = /[/*+-]/;

  const sign = signRegex.exec(expression)[0];

  const digits = expression.match(digitRegex);
  const firstNum = Number(digits[0]);
  let secondNum = Number(digits[1]);
  if (secondNum < 0)
    secondNum = -secondNum;

  switch (sign) {
    case "+": {
      return firstNum + secondNum;
    }
    case "-": {
      return firstNum - secondNum;
    }
    case "*": {
      return firstNum * secondNum;
    }
    case "/": {
      if (secondNum === 0) {
        return "Error: division by zero";
      }
      return firstNum / secondNum;
    }
    default: {
      throw EvalError()
    }
  }
}

export {evaluate};