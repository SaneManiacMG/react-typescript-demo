import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';

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
      <Input value='' handleChange={(event) => console.log("Input event: ", event)} />
    </div>
  );
}

export default App;
