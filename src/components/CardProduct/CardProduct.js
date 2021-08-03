import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clientAxios from '../../config/clientAxios';
import { Card, Button } from 'react-bootstrap';

const CardProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProductById = async () => {
    const { data } = await clientAxios.get(`/products/${id}`);
    setProduct(data); 
  }

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <Card className="my-5 mx-auto" style={{ width: '18rem' }}>
      <Card.Header>
        {product.name}
      </Card.Header>
      <Card.Body>
        <p>
          <span>{product.brand}</span> - <span>$ {product.price}</span>
        </p>
      </Card.Body>
      <Card.Footer>
        <Button className="mr-2" variant="warning">Editar</Button>
        <Button variant="danger">Borrar</Button>
      </Card.Footer>
    </Card>
  );
}
 
export default CardProduct;