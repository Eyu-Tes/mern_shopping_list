import {Container, Button} from 'reactstrap'

const AddTodo = ({addTodo}) => {
    return (
        <Button
            color="dark"
            style={{marginBottom: '2rem', borderRadius: '0'}}
            onClick={() => {
                const name = prompt('Enter Item')
                if(name) addTodo(name)
            }}
        >Add Item</Button>
    )
}

export default AddTodo
