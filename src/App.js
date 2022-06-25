import { Route, Switch } from 'react-router-dom';
import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import CreateDronePage from './Pages/CreateDronePage';
import ListDronePage from './Pages/ListDronePage.jsx';
import ViewDronePage from './Pages/ViewDronePage';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="container">
      <Switch>
        <Route exact path="/drones" component={ListDronePage} />
        <Route exact path="/add-drone/:id" component={CreateDronePage} />
        <Route exact path="/view-drone/:id" component={ViewDronePage} />
      </Switch>

      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
