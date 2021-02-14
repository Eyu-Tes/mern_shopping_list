import {Component, useState} from 'react'
import {ListGroup} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {v4 as uuidv4} from 'uuid'
import TodoItem from './TodoItem'

class Todos extends Component {
    render() {
        const {todos, deleteTodo} = this.props
        return (
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {todos.map(todo => (
                        <CSSTransition key={todo.id} timeout={500} classNames="fade">
                            <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo}/>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        )
    }
}

export default Todos
