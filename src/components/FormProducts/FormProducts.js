import { useState, useEffect } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import clientAxios from '../../config/clientAxios';
import { useParams, useHistory } from 'react-router-dom';

const FormProducts = ({ isEdit }) => {
  const { id } = useParams();
  const history = useHistory();

  const [formValues, setFormValues] = useState({
    name: '',
    brand: '',
    price: 0
  });
  const [success, setSuccess] = useState(false);

  const { name, brand, price } = formValues;

  const handleOnChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const getProductById = async () => {
    const { data: { name, brand, price } } = await clientAxios.get(`/products/${id}`);
    setFormValues({
      name,
      brand,
      price
    })
  }

  useEffect(() => {
    if(id) {
      getProductById();
    }
  }, [])

  const handleOnSubmit = async e => {
    e.preventDefault();
    if(isEdit) {
      await clientAxios.put(`/products/${id}`, formValues);
      history.goBack();
    } else {
      const data = await clientAxios.post('/products', formValues);
      if (data.status === 201) {
        setSuccess(true);
        setFormValues({
          name: '',
          brand: '',
          price: 0
        });
      }
      setTimeout(() => setSuccess(false), 3000)
    }
  }

  return (
    <>
    {success && (
      <Alert className="my-3 text-center" variant="success">
        Producto creado exitosamente
      </Alert>
    )}
      <Form onSubmit={handleOnSubmit} className="my-5">
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
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Marca"
            name="brand"
            value={brand}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            name="price"
            value={price}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button block size="lg" variant="warning" type="submit">
          {isEdit  ? 'Editar' : 'Crear'}
        </Button>
      </Form>
    </>
  );
}
 
export default FormProducts;