//Libs / Dependencies / Modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardProduct from './components/CardProduct/CardProduct';
//Components & Routes
import Layout from './components/Layout/Layout';
import Edit from './routes/Edit';
import Home from './routes/Home';
import List from './routes/List';
//Context

//styles

//Configurations

function App() {
  return (
    <Router>
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
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
