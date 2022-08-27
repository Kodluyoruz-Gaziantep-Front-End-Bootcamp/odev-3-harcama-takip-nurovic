import './App.css';
import Pie from './Components/Pie'
import Input from './Components/Input';
import { GlobalProvider } from './Context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Input />
      <div className="h-56">
        <Pie />
      </div>
    </GlobalProvider>
  );
}

export default App;
