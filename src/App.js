import logo from './logo.svg';
import './App.css';

function App() {
    function checkScope() {
    let i = 'function scope';
    if (!true) {
    i = 'block scope';
    //console.log('Block scope i is: ', i);
  }
    //console.log('Function scope i is: ', i);
    return console.log(i);
  }
  checkScope()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >//git push --force https://github.com/IvanovMike2023/Evrika.git
          START!!!!!!!!!!!!
        </a>
      </header>
    </div>
  );
}

export default App;
