import logo from './logo.svg';
import './App.css';

import Feature from './components/Feature'
import Navbar from './components/Navbar';
import FeatureGroup from './components/FeatureGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <div id = "main-content">
          <FeatureGroup></FeatureGroup>
        </div>
        
      </header>
    </div>
  );
}

export default App;
