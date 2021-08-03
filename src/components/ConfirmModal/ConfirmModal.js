import { Modal, Button } from "react-bootstrap";
import clientAxios from "../../config/clientAxios";
import { useHistory } from "react-router";

const ConfirmModal = ({ show, setHide, product }) => {

  const history = useHistory();

  const deleteProduct = async () => {
    await clientAxios.delete(`/products/${product.id}`);
    history.go();
  }

  return (
    <Modal show={show} onHide={setHide}>
      <Modal.Header closeButton>
        <Modal.Title>Borrar producto: {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Está seguro que desea borrar el producto {product.name} {product.brand}? No podrá recuperarlo luego.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={setHide} variant="secondary">Cancelar</Button>
        <Button onClick={deleteProduct} variant="primary">Confirmar</Button>
      </Modal.Footer>
    </Modal>
  );
}
 
export default ConfirmModal;