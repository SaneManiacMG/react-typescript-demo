import './App.css';
import { Button } from './components/Button';

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
      <Button handleClick={(event, id) => console.log("Button cliked: ", event, id)} />
    </div>
  );
}

export default App;
