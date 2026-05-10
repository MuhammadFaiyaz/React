/*
1. What is two-way binding?
Answer: Two-way binding means the synchronized link between the data and the UI. In this process, data will be synchronized in both sides. */

/*
2. How is two-way binding created in React?
Answer: Two-way binding created in React by using value attribute and onChange event. We put the input data into the state and use the state function into the onChange event to update the UI. */

/*
3. What is the purpose of the "value" prop in a form input?
Answer:  The value property helps make an input a controlled component. By using it, React can track and control the input’s current value easily. */

/*
4. Why is the onChange event used with inputs? 
Answer: Without using the `onChange` event, React cannot update the state when the input value changes. To update the UI, we need to update the state, and we usually do that by using the state function inside the `onChange` event. */

/*
5. What does this code do?<input value={name} onChange={(e) => setName(e.target.value)} />
Answer: In this code, the input field is controlled by React using state. React tracks what the user types into the input field, and whenever a change occurs, the state is updated through the state function inside the `onChange` event. As a result, React re-renders the UI and the user can instantly see the updated value. */

/*
6. What problem occurs if you provide value={name} but don't provide onChange?
Answer: If we provide `value={name}` without the `onChange` event, the input field becomes read-only. As a result, the user cannot type or update the value. React also cannot update the state or re-render the updated value in the UI. */

/*
7. What do you understand by "Form handling"? 
Answer: Form handling in React means tracking and managing the data that users enter into input fields, updating the state through two-way binding, validating the data, controlling the form components, and submitting user input using state and events also. */

/*
8. Why is e.preventDefault() used during form submission?
Answer; The default behavior of a form is to reload the page when it is submitted. As a result, the entire UI re-renders and the submitted data may be lost. To prevent this default reloading behavior, we use `e.preventDefault()`. */

/*
9. What is the difference between handling a form submit and handling a normal button click?
Answer: There is an important difference between handling a form submission and handling a normal button click. If we use the onClick event for form submission, it can lead to incorrect behavior because it depends on where and how the click event is triggered, which may not always represent a proper form submission.

On the other hand, the `onSubmit` event is specifically designed for form submission. It works when the user submits the form properly, making form handling more reliable and organized. We can also use the `required` attribute to ensure that users cannot submit the form while leaving the input fields empty or blank. */

/*
10. Explain theoretically how to handle a form with name, email, and password using state.
Answer: To handle a form with name, email, and password using state, we need to use properties such as `value` and `onChange` in the input fields. The `value` property helps make the input a controlled component, allowing React to track and control the input data through state. When the state updates, React re-renders the UI, so the user can instantly see the updated value.

In addition, we can use validation to check whether the password is strong or weak and ensure that the form data is valid before submission. */

/*
11. What is the relation between a Controlled Component and two-way binding?
Answer: Controlled component is React’s way of implementing two-way binding. It allows the UI to update according to the state, and also updates the state from the UI using the `value` prop and `onChange` event, keeping both in sync. */

/*
12. Suppose typing is happening in the input field but the state is not updating—what could be the possible reasons? 
Answer: The possible reasons could be that the `onChange` event is not properly set up, or the state function is not correctly updating the state. It could also be that the input field is not properly connected to the state through the `value` prop, or there might be an error in the event handler function that prevents the state from updating. */
