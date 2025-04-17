import React from 'react'
import Button from 'react-bootstrap/Button';
import FormComponent from './FormComponent';
import Container from 'react-bootstrap/Container';
import Gridcard from './Gridcard';
import MaterialButton from './MaterialButtons';
const Bootstrap = () => {
  return (
    <div>
      <h1>Welcome to Bootstrap Page...</h1>
      
      <Container>
      <FormComponent />
      <MaterialButton />
      <Gridcard />
      </Container>

      <Button variant="primary">Submit Button here</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>

    </div>
  )
}

export default Bootstrap