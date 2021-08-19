import { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import FormProducts from "../components/FormProducts/FormProducts";

const Edit = () => {
  const { hola } = useContext(AuthContext);
  return (
    <FormProducts isEdit />
  );
}
 
export default Edit;