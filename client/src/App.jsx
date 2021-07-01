import { Route } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import './App.css';

function App() {
  return (
    <main className="container">
       <Route path="/movies" component={Movies}></Route>
       <Route path="/customers" component={Customers}></Route>
     </main>
  );
}

export default App;
