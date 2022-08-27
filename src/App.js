import './App.css';
import ParentComp from './Pure-Reg-Comp/ParentComp';
import HighOrderComp from './High-Order-Comp/HighOrderComp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComp/>
        <HighOrderComp/>
      </header>
    </div>
  );
}

export default App;
