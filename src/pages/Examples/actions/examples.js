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

const getExamples = (studentsCount) => new Promise((onSuccess) => {
  setTimeout(
      () => onSuccess(Array
          .from(new Array(studentsCount).keys())
          .map(index => ({ name: `Student ${index}`}))),
      2000
  );
});

const fetchExamples = ({ studentsCount }) => (dispatch) => {
  dispatch(requestExamples()); // Повідомляю стору, що роблю запит користувачів
  return getExamples(studentsCount) // Викликаю функцію запиту студентів
      .then(students => dispatch(receiveExamples(students))) // Успіх
      .catch(() => dispatch(errorReceiveExamples())); // Помилка
};

export default {
  fetchExamples,
};
