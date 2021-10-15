
import { BrowserRouter as Router , Route ,Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav'
import Contact from './components/Contant'

function App() {


  return (
    <>


<Router>
<Nav/>
<Switch>
  <Route exact path="/" > <Home /> </Route>
</Switch>
<Switch>
  <Route exact path="/About" > <About /> </Route>
</Switch>
<Switch>
  <Route exact path="/contact" > <Contact /> </Route>
</Switch>
  
</Router>

    </>
  );
}

export default App;
