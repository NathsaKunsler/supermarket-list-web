import './App.css';
// import { ListCard } from "./components/Listard";
import { SplashScreen } from './Screens/SplashScreen'

const fakeList = [
  {
    id: 0,
    name: 'Arroz',
    quantity: 2,
    checked: false,
  },
  {
    id: 1,
    name: 'Feijão',
    quantity: 1,
    checked: false,
  },
  {
    id: 2,
    name: 'Batata',
    quantity: 5,
    checked: false,
  }
];


function App() {
  
  return (
    <SplashScreen />
  );
}

export default App;
