//Libs / Dependencies / Modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardProduct from './components/CardProduct/CardProduct';
//Components & Routes
import Layout from './components/Layout/Layout';
import Edit from './routes/Edit';
import Home from './routes/Home';
import List from './routes/List';
import Register from './routes/Register';
//Context
import AuthState from './context/auth/authState';
import Login from './routes/Login';
//styles

//Configurations

function App() {
  return (
    <Router>
      <AuthState>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/list" exact>
              <List />
            </Route>
            <Route path="/product/:id" exact>
              <CardProduct />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Layout>
      </AuthState>
    </Router>
  );
}

export default App;
