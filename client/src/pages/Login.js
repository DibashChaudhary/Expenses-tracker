import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomeInput } from "../components/custom-input/CustomeInput";
import { Layout } from "../components/layout/Layout";
import { Link } from "react-router-dom";

export const Login = () => {
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
      <Form className="login-page"  >
        <h2>Welcome Back!</h2>
        <hr />

        {inputFields.map((item) => (
          <CustomeInput {...item} />
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
