
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export const TransForm = () => {
  const initialState ={
    type: "",
    name: "",
    amount: "",
  }

  const [formData, setFormData] = useState({initialState});

  const handleOnChange = (e) => {
    const{value, name} = e.target;
    console.log(name, value)

    setFormData({
     formData,
      [name]: value,
    })
        
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    setFormData(initialState);
  }
 

  return (
    <>
        <div className='form'>
        <Container className='d-grid mt-3' onSubmit={handleOnSubmit}>
            <Form className="mb-3">
            <Row className='gap-2'>
            <Col md="3">
                <Form.Select name="type" defaultValue="choose.." required
                onChange={handleOnChange}
                value={formData.type}>
                  <option>Choose..</option>
                  <option>Income</option>
                  <option>Expenses</option>
                </Form.Select>
            </Col>
            <Col md="5">
                <Form.Control name="name" placeholder="Enter your Income/Expenses here" required 
                onChange={handleOnChange}
                value={formData.name}/>
            </Col>
            <Col md="2">
                <Form.Control name="amount" type="number" placeholder="100" required
                onChange={handleOnChange}
                value={formData.amount}/>
            </Col>
            <Col md="2">
              <div className="d-grid">
                <Button variant="primary" type="submit">
                    Add
                </Button>
              </div>
            </Col>
            </Row>
            </Form>
        </Container>
     </div>
    </>
  )
}
