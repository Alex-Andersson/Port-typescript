import Image from 'next/image';
import './App.css';
import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Image src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
            </header>
        </div>
    );
}

export default App;
