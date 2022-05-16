import logo from './logo.svg';
import './App.css';
import { Mobileos , MobileManufact } from './components/details';
function App() {
  return (
     <div className='App'>   
      <h1>Mobile Operating System</h1>
        <Mobileos></Mobileos>
      <h1>Mobile Manufacturers</h1>
        <MobileManufact></MobileManufact>
      </div>
 );
}

export default App;
