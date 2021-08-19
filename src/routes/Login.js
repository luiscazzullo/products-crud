import { useState, useContext } from 'react';
import { Form, Button } from "react-bootstrap";
import AuthContext from '../context/auth/authContext';

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });
  const { password, email } = formValues;

  const handleOnChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  console.log(user);
  return (
    <Form onSubmit={e => { e.preventDefault(); login(formValues) }} className="my-5">
      <Form.Group className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Button block size="lg" variant="warning" type="submit">
        Registrar
      </Button>
    </Form>
  );
}
 
export default Login;