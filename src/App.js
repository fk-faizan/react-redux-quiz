import Home from './views/home';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
