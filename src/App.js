import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      </header>

    </div>
  );
}

export default App;
