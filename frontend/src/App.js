import './App.css';
import CalculatorApi from './CalculatorApi';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Calculator calculatorApi={new CalculatorApi('http://127.0.0.1:8080')}/>
      </header>
    </div>
  );
}

export default App;
