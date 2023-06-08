import logo from './logo.svg';
import './App.css';
import TokenRenewer from './Components/TokenRenewer';
import TaskQueue from './Components/TaskQueue';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example of usage of the Async.Queue library
        </p>
      </header>
      <TaskQueue />
      <TokenRenewer /> 
    </div>
  );
}

export default App;
