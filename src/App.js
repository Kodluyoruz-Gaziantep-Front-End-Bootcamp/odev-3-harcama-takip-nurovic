import './App.css';
import Pie from './Components/Pie'
import Input from './Components/Input';
import InputList from './Components/InputList';
import { GlobalProvider } from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Input />
      <div className="h-56">
        <Pie />
      </div>
      <InputList/>
    </GlobalProvider>
  );
}

export default App;
