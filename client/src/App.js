import {useState, useEffect} from 'react'
import {Container} from 'reactstrap'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Todos from './components/todos/Todos'
import AddButton from './components/todos/AddButton'
import TodoModal from './components/todos/TodoModal'
import Spinner from './components/layout/Spinner'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [err, setErr] = useState('')

  const toggleModal = () => {
    setErr('')
    setModal(!modal)
  }
  
  const addTodo = (name) => {
    axios.post('/api/items/', {name})
    .then(res => {
      refreshList()
      setModal(!modal)
    })
    .catch(error => setErr('Field cannot be empty!'))
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
        <AddButton toggleModal={toggleModal}/>
        <Todos todos={todos} deleteTodo={deleteTodo}/>
        {modal && <TodoModal onSave={addTodo} toggle={toggleModal} err={err}/>}
        {loading && <Spinner/>}
      </Container>
    </div>
  )
}

export default App
