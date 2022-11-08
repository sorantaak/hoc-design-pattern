import { useState, useMemo, useCallback } from "react";
import ReactDOM from "react-dom/client";
import TodosList from "./components/todos/todos-list";
import Panel from "./pages/panel";

const App = () => {
	const [todos, setTodos] = useState([]);

	const [count, setCount] = useState(0);
	const calculation = useMemo(() => {
		return expensiveCalculation(count);
	}, [count]);

	const increment = () => {
		setCount((c) => c + 1);
	};
	const addTodo = useCallback(() => {
		setTodos((t) => [...t, "New Todo"]);
	}, []);
	// const addTodo = () => {
	// 	setTodos((t) => [...t, "New Todo"]);
	// };

	return (
		// <div>
		// 	<div>
		// 		<TodosList todos={todos} addTodo={addTodo} />
		// 	</div>
		// 	<hr />
		// 	<div>
		// 		Count: {count}
		// 		<button onClick={increment}>+</button>
		// 		<h2>Expensive Calculation</h2>
		// 		{calculation}
		// 	</div>
		// </div>
		<Panel />
	);
};

const expensiveCalculation = (num) =>
	[...Array(10000000).keys()].reduce((total, num) => total + 1, num);

export default App;
