import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInput } from "../components/custom-input/CustomeInput";
import { Layout } from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import {loginUser } from "../utils/axiosHelper";
import { Alert } from "react-bootstrap";

export const Login = () => {

const [loginData, setLoginData]= useState({});
const [response, setResponse]=useState({})
  const loginHandleOnChange = (e)=>{
    const { value, name }= e.target;
    
    setLoginData({
        ...loginData,
        [name]: value
    })
  }

  const handleOnSubmit = async (e)=>{
    e.preventDefault();
    const {data}= await loginUser(loginData)
    setResponse(data);
  }

  
  console.log(loginData)

  const inputFields = [
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
    },
  ];

  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit} >
        <h2>Welcome Back!</h2>
        <hr />

        {response.status === "error" && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item) => (
          <CustomeInput {...item} onChange={loginHandleOnChange}/>
        ))}

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className="text-end">
          New here? <Link to="/register"> register </Link>
        </div>
      </Form>
    </Layout>
  );
};
