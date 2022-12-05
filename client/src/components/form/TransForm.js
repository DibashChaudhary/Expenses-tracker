
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export const TransForm = () => {

  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
        setFormData(e.target.value)
  }
  console.log(formData)

  return (
    <>
        <div className='form'>
        <Container className='d-grid mt-3'>
            <Form.Group className="mb-3">
            <Row>
            <Col xs={3}>
                <Form.Select>
                <option>Income</option>
                <option>Expenses</option>
                </Form.Select>
            </Col>
            <Col xs={5}>
                <Form.Control placeholder="Enter your Income/Expenses here" />
            </Col>
            <Col xs={2}>
                <Form.Control type="number" placeholder="100" />
            </Col>
            <Col xs={2}>
                <Button variant="primary" type="submit" onChange={handleOnChange}>
                    Submit
                </Button>
            </Col>
            </Row>
            </Form.Group>
        </Container>
     </div>
    </>
  )
}
