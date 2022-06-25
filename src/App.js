import { Route, Switch } from 'react-router-dom';
import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import CreateDronePage from './Pages/CreateDronePage';
import CreateEntregaPage from './Pages/CreateEntregaPage';
import ListDronePage from './Pages/ListDronePage.jsx';
import ListEntregaPage from './Pages/ListEntregaPage';
import ViewDronePage from './Pages/ViewDronePage';
import ViewEntregaPage from './Pages/ViewEntregaPage';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="container">
      <Switch>
        <Route exact path="/drones" component={ListDronePage} />
        <Route exact path="/add-drone/:id" component={CreateDronePage} />
        <Route exact path="/view-drone/:id" component={ViewDronePage} />
        <Route exact path="/entregas" component={ListEntregaPage} />
        <Route exact path="/add-entrega/:id" component={CreateEntregaPage} />
        <Route exact path="/view-entrega/:id" component={ViewEntregaPage} />
      </Switch>

      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
