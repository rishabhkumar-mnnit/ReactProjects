
import './App.css';
import {Provider} from 'react-redux'
import Todo from './components/Todo'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import store from './redux/store';
function App() {
  return (
    <Provider store = {store}>
      <Container >
      <Todo/>
    </Container>
    </Provider>
    
  );
}

export default App;
