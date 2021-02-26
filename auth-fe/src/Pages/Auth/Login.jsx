import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import backend from "../../clients/axios";
import {useHistory} from 'react-router-dom';

const Login = () => {
  
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  const history = useHistory();
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const {data} = await backend.post("/auth/login", credentials)
        console.log("data::::", {data})
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        //history.push("/");
        window.location.replace("/");
      } catch(err){
          console.log(err)
      }
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          name="email" value={credentials.email} onChange={handleChange}
          type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          name="password" value={credentials.password} onChange={handleChange}
          type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
