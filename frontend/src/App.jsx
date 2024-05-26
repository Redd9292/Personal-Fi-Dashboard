import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashbaord from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Settings from './pages/Settings';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Dashbaord} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/settings" component={Settings} />
    </Switch>
    <Footer />
  </Router>
  )
}

export default App
