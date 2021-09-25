import './App.css';
import Message from './Message';

const App = () => {
  const title = 'Hola mundo'
  return (
    <div className="App">
      {title}
      <Message color='#6c6c6c' message='Testing message to other component' />
    </div>
  );
}

export default App;
