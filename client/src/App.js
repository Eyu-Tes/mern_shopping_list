import {useState} from 'react'
import {Container} from 'reactstrap'
import {v4 as uuidv4} from 'uuid'
import Navbar from './components/layout/Navbar'
import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo'
import './App.css'

const initialTodos = [
  {id: uuidv4(), name: "Go to Market"},
  {id: uuidv4(), name: "Study"},
  {id: uuidv4(), name: "Sally's books"},
  {id: uuidv4(), name: "Article"}
]

const App = () => {
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (name) => {
    setTodos([...todos, {id: uuidv4(), name}])
  }
  
  const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <Navbar/>
      <Container>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} deleteTodo={deleteTodo}/>
      </Container>
    </div>
  )
}

export default App
