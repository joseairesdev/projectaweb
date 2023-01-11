import './App.css';
import Sidebar from './components/Sidebar';
import Rotas from './Routes';


function App()
{
  return (
    <div >
      <Sidebar>
        <Rotas />
      </Sidebar>
    </div>
  );
}

export default App;
