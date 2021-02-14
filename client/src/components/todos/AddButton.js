import {Container, Button} from 'reactstrap'

const AddButton = ({toggleModal}) => {
    return (
        <Button
            color="dark"
            style={{marginBottom: '2rem', borderRadius: '0'}}
            onClick={toggleModal}
        >Add Item</Button>
    )
}

export default AddButton
