import logo from './logo.svg';
import './App.css';

function App() {


    let myString = "Hello, World!";
    let myRegex = /Hello/;
    let result = myRegex.test(myString); // Change this line
    console.log(result)
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
