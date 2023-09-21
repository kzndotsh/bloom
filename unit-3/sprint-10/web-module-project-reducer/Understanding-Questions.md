# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

The user presses the 1 button.
The onClick event handler is triggered
The dispatch function is called with the addOne action and a value of 1 as an argument.
The reducer function is invoked with the current state and the addOne action.
The reducer function updates the state by incrementing the total value by 1.
The updated state is returned from the reducer function.
The TotalDisplay component is rendered with the updated state.total value, which now shows the total + 1.
