import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import clientAxios from '../../config/clientAxios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const hideModal = () => setShowModal(false);
  const getProducts = async () => {
    const { data } = await clientAxios.get('/products');
    setProducts(data);
  }
  const history = useHistory();
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <Table className="my-5" striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </td>
                <td>{product.brand}</td>
                <td>$ {product.price}</td>
                <td>
                  <Button onClick={() => history.push(`/edit/${product.id}`)} variant="warning">Editar</Button>
                </td>
                <td>
                  <Button onClick={() => {
                    setShowModal(true);
                    setProduct(product);
                  }} variant="danger">Borrar</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <ConfirmModal product={product} show={showModal} setHide={hideModal} />
    </>
  );
};
 
export default ProductList;