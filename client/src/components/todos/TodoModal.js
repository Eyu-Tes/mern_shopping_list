import React, { useState } from 'react'
import { 
  Button, 
  Alert,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

const TodoModal = ({onSave, toggle, err}) => {
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    onSave(name)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}> Add to Shopping List </ModalHeader>
      <Form onSubmit={onSubmit}>
        <ModalBody>
          {err && <Alert color="danger" className="rounded-0">{err}</Alert>}
          <FormGroup>
              <Label for="title">Item</Label>
              <Input 
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  autoFocus
                  placeholder="Enter item name"
                  className="rounded-0"
              />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
            <Button type="submit" color="dark" className="btn-block rounded-0">Save</Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default TodoModal
