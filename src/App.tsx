import './App.css';

import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';


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
      <DomRef />
      <MutableRef />
    </div>
  );
}

export default App;
