import {useState, useEffect} from 'react'
import {Container} from 'reactstrap'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo'
import Spinner from './components/layout/Spinner'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const addTodo = (name) => {
    axios.post('/api/items/', {name})
    .then(res => refreshList())
  }

  const deleteTodo = (id) => {
    axios.delete(`/api/items/${id}`)
    .then(res => refreshList())
  }

  const refreshList = () => {
    setLoading(true)
    axios.get('/api/items/')
    .then(res => {
      setTodos(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    refreshList()
  }, []) 

  return (
    <div className="App">
      <Navbar/>
      <Container>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} deleteTodo={deleteTodo}/>
        {loading && <Spinner/>}
      </Container>
    </div>
  )
}

export default App
