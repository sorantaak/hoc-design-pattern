import React from "react";
import PropTypes from "prop-types";
import { memo } from "react";

const TodosList = ({ todos, addTodo }) => {
	console.log("child component is rendering");
	return (
		<>
			<h2>My Todos</h2>
			{todos.map((todo, index) => {
				return <p key={index}>{todo}</p>;
			})}
			<button onClick={addTodo}>Add Todo</button>
		</>
	);
};

TodosList.propTypes = {
	todos: PropTypes.array.isRequired,
};
export default memo(TodosList, (pevTodo, nextTodo) => {
	return pevTodo.addTodo === nextTodo.addTodo;
});
// export default memo(TodosList, (prevProps, nextProps) => {
// 	console.log(prevProps.todos === nextProps.todos);
// 	return prevProps.todos === nextProps.todos;
// });

// HOC => (Higer Order Component) = design pattern
// for implement HOC use {memo} in react library
// if return true from function in seconde memo argument , means do not render jsx in this component
