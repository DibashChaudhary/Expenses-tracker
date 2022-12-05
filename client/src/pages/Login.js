import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInput } from "../components/custom-input/CustomeInput";
import { Layout } from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import {loginUser } from "../utils/axiosHelper";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
const navigate = useNavigate();
const [loginData, setLoginData]= useState({
  email:"dibashchaudhary2301@gmail.com",
  pin:"1234"
});
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

    if( data.status === "success" ){
      navigate("/dashboard"); 
      sessionStorage.setItem("user", JSON.stringify(data.user));
    }
  }
  console.log(loginData)

  const inputFields = [
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
      value: loginData.email,
    },
    {
      label: "pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      value:loginData.pin,
    
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
