import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  };

  const nameList = [
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Diana',
      last: 'Prince'
    },
    {
      first: 'Bruce',
      last: 'Wayne'
    }
  ]


  return (
    <div className="App">
      <Greet name="MG" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
