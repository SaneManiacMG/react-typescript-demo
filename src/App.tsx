import './App.css';
import { Container } from './components/Container';

function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // };

  // const nameList = [
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Diana',
  //     last: 'Prince'
  //   },
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   }
  // ]


  return (
    <div className="App">
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;
