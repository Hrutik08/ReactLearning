import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
       {/* <Greet name = "banta">
        <p>
          child paragraph
        </p>
        </Greet>
       <Greet name = "Amit">
        <button>click here</button>
       </Greet>
       <Greet name = "Amol"/>
      <Welcome name = "amar"/> */}
      {/* <Hello/> */}
      <Message></Message>
    </div>
  );
}

export default App;
