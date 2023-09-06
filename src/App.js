import { useState, useEffect } from 'react'
import './App.css';
import { ListCard } from "./components/Listard";

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
  const [loading, setLoading] = useState(true)
  const [marketList, setMarketList] = useState([]);
  
  const loadList = () => {
    setLoading(true)
    setTimeout(() => {
      setMarketList(fakeList)
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
  }, [])
  
  return (
    <div className="App">
      {loading ? <span> Carregando...</span> : marketList.map((item) => (
          <ListCard key={`item_${item.id}`} item={item} />
      ))}
    </div>
  );
}

export default App;
