import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from './Components/Screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header></Header>
      <Container>
        <main className="py-3">
        <h2>Welcome</h2>
        <HomeScreen></HomeScreen>
        </main>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
