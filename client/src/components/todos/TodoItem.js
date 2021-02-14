import {ListGroupItem, Button} from 'reactstrap'

const TodoItem = ({todo: {name, _id}, deleteTodo}) => {
    return (
        <ListGroupItem href="#" className="rounded-0">
            <Button 
                className="rounded-0 remove-btn"
                color="danger"
                size="sm" 
                onClick={() => deleteTodo(_id)}
            >&times;</Button>
            {name}
        </ListGroupItem>
    )
}

export default TodoItem
