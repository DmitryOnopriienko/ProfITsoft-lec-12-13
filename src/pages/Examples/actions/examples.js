const receiveExamples = examples => ({
  examples,
  type: 'RECEIVE_EXAMPLES',
});

const requestExamples = () => ({
  type: 'REQUEST_EXAMPLES',
});

const errorReceiveExamples = () => ({
  type: 'ERROR_RECEIVE_EXAMPLES'
});

const getExamplesHttp = (examplesCount = 5) => {
  return fetch("http://localhost:8080/math/examples?count=" + examplesCount);
}

const fetchExamples = ({ examplesCount }) => (dispatch) => {
  dispatch(requestExamples());

  return getExamplesHttp(examplesCount)
      .then(examples => examples.json())
      .then(examples => dispatch(receiveExamples(examples)))
      .catch(() => dispatch(errorReceiveExamples()));
};

export default {
  fetchExamples,
};
