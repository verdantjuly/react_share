import logo from "./logo.svg";
import "./App.css";

// App 이라는 컴포넌트 (사용자 정의 태그)
function App() {
  return (
    // jsx 내용
    // javascript + xml
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
