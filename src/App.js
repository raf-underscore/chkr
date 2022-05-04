import React from 'react'
import {
	Heading,
	VStack,
	IconButton,
	useColorMode,
} from '@chakra-ui/react'

import TodoList from './components/Todo/TodoList'
import AddTodo from './components/Todo/AddTodo'

import {FaSun, FaMoon} from 'react-icons/fa'
import {useState, useEffect} from 'react'

function App() {
	const initialTodos = [
		{
			id: 1,
			body: 'Learn React',
			completed: false,
		},
		{
			id: 2,
			body: 'Learn Chakra UI',
			completed: false,
		},
		{
			id: 3,
			body: 'Learn Three JS',
			completed: false,
		},
	]
	const [todos, setTodos] = useState(
		() =>
			JSON.parse(localStorage.getItem('todos')) || []
	)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	function deleteTodo(id) {
		const newTodos = todos.filter((todo) => {
			return todo.id !== id
		})
		setTodos(newTodos)
	}

	function addTodo(todo) {
		setTodos([...todos, todo])
	}

	const {colorMode, toggleColorMode} = useColorMode()

	return (
		<VStack p={4}>
			<IconButton
				icon={
					colorMode === 'light' ? (
						<FaSun />
					) : (
						<FaMoon />
					)
				}
				isRound="true"
				size="lg"
				alignSelf="flex-end"
				onClick={toggleColorMode}
			/>
			<Heading
				mb="8"
				fontWeight="extrabold"
				size="2xl"
				bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
				bgClip="text"
			>
				Todo Application
			</Heading>
			<TodoList
				todos={todos}
				deleteTodo={deleteTodo}
			/>
			<AddTodo addTodo={addTodo} />
		</VStack>
	)
}

export default App
