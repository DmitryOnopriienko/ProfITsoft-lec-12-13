
const evaluate = (expression) => {
  const fullExprRegex = /\d+[+\\\-*/]\d+/g;
  if (!expression.match(fullExprRegex)) {
    return false;
  }

  const digitRegex = /\d+/g;
  const signRegex = /[/*+-]/;

  // const matches = expression.match(digitRegex);
  const sign = signRegex.exec(expression)[0];

  const digits = expression.match(digitRegex);
  const firstNum = Number(digits[0]);
  const secondNum = Number(digits[1]);

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
      return firstNum / secondNum;
    }
    default: {
      throw EvalError()
    }
  }
}

export {evaluate};