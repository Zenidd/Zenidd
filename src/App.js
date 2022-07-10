import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Juan Pablo Sáez <code>(Zenid)</code> here.
        </p>
        <p>
          I love Linux, Cloud services and electronics. <br />
          Data centers fascinate me.<br />
          Currently following the DevOps path 🎋.
        </p>
        <a
          className="App-link"
          href="https://github.com/Zenidd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/juanpablosaezgutierrez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
