import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from './Components/Screens/HomeScreen';
import ProductScreen from './Components/Screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header></Header>
      <Container>
        <main className="py-3">
          <Switch>
            <Route path='/' exact>
              <HomeScreen></HomeScreen>
            </Route>
            <Route path='/product/:id' >
              <ProductScreen></ProductScreen>
            </Route>
          </Switch>
        </main>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
