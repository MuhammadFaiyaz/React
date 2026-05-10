/* 1. What is React?
Answer: React state is the changing data or the current condition of a component that controls that what will be show in my UI. If my state changes, then it will also affect my UI and my UI will be updated. */

/* 2. Why is state used instead of a normal variable?
Answer: If I change the value of the normal variable, React don't know that what has been changed. But if I use state and then I change the state or update the state, then React easily knows what is changed in my UI. And according to that change, React renders that particular part of the component. */

/*
3. What is the purpose of "0" in this code? const [count, setCount] = useState(0);
Answer: Here zero is the initial value of that state. */

/*
4. What is the difference between these two? count and setCount
Answer: Here count is the current state and setCount is the function of updating my state. */

/*
5. Why does React re-render the UI when the state changes?
Answer: When a state is changed or modified, React re-renders the UI of that particular part because React is a single-page application. It only changes that part, I mean, it only changes that part which has been updated using state. React do this using a comparative compare with virtual DOM and real DOM. */


/*
6. What is the problem with this code?

const [count, setCount] = useState(0);

function increase() {
  count = count + 1;
}

Answer: In this function, only state are trying to update, but it is an invalid process as we have to use the function (setCount) to update the state, not the current state its-self. */


/*
7. Suppose a modal opens and closes. Explain theoretically how state would work in that scenario.

Answer: a state will be declared there. Suppose the name of that state is OpenModal, and the name of that function is setOpenModal.  The initial value will be close, but we will use the function setOpenModel and update or change the value to open. And these changes will be occurred in a function that will be called in an event. */

/*
8. Why is the value of a form input kept in state?
Answer: So that React can identify or can understand or can be informed what changes is occurred in the form. If we don't put the input value in the state, then React won't be able to know where is changes and which changes has been occurred. */

/*
9. Explain this line: setCount(count + 1);
React internally কী বুঝে?
Answer: React internally understand that coder is trying to change the current state by adding one using the function of that state. */

/*
10. Suppose the state is changing, but the UI is not updating. What could be the possible reasons for this?

Answer: The possible reasons are given in the below. Maybe coder is trying to change the state itself, not using the function. State is changed, but it is not used in any function or in any event. Maybe state is changed, but any event is not triggered. */