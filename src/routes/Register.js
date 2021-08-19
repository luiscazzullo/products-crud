import { useState, useContext } from 'react';
import { Form, Button } from "react-bootstrap";
import AuthContext from '../context/auth/authContext';

const Register = () => {
  const { register, message, loading } = useContext(AuthContext);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { name, password, email } = formValues;

  const handleOnChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  return (
    <Form onSubmit={e => { e.preventDefault(); register(formValues)}} className="my-5">
      <h1>{loading ? 'Cargando...' : message}</h1>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su producto"
          name="name"
          value={name}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleOnChange}
        />
      </Form.Group>
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
      <Button block size="lg" variant="warning" type="submit">
        Registrar
      </Button>
    </Form>
  );
}
 
export default Register;