import logo from './logo.svg';
import './App.css';

function App() {
    const result = {
        success: ["max-length", "no-amd", "prefer-arrow-functions"],
        failure: ["no-var", "var-on-top", "linebreak"],
        skipped: ["no-extra-semi", "no-dup-keys"]
    };
    function makeList(arr) {
        // Only change code below this line
        const failureItems = []//[`<li class="text-warning">${i}</li>`];

        for(let i=0;i<result.failure.length;i++){

            let t = i
            failureItems.push( `<li class="text-warning">${result.failure[i]}</li>` )
            //'<li class="text-warning">no-var</li>'
        }
        // Only change code above this line

        return console.log(failureItems);
    }

    const failuresList = makeList(result.failure);
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
