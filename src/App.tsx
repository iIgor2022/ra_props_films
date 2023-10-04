import './App.css'
import Stars from './components/stars';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {
  return (
    <Stars count={getRandomIntInclusive(1, 5)}/>
  );
}
