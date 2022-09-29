import './App.css';
import logo from './logo.svg';
import { Index } from "./Component/Index";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return <div>
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  </div>
}

export default App;
