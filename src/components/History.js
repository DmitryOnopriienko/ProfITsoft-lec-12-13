import React from "react";

class History extends React.Component {
  render() {
    return (
        <div className="history">
          {createExpressionDivsList(this.props.history)}
        </div>
    );
  }
}

const createExpressionDivsList = (expressions) => {
  const divs = [];
  for (let i = 0; i < expressions.length - 1; i++) {
    divs.push(
        <div className="expr-list-item" key={i}>
          {expressions[i]}
        </div>
    );
  }

  const lastIndex = expressions.length - 1;
  divs.push(
      <div className="last-expr-list-item" key={lastIndex}>
        {expressions[lastIndex]}
      </div>
  );
  return divs;
}

export default History;