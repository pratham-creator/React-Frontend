import './App.css';
import Dashboard from './components/Dashboard';
import AssembleDashboard from './components/AssembleDashBoard';

function App() {
  return (
    <div className="App container">
        <div className="row xyz">
          <div className="dashBoard col-2">
          <Dashboard/>
          </div>
          <AssembleDashboard/>
          
        </div>
        
    </div>
  );
}

export default App;
