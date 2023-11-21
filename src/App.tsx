import './App.css';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';


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
      <CustomButton variant='primary' onClick={() => console.log(`clicked`)}>
        Primary Button
      </CustomButton>
      <CustomInput type='text' />
    </div>
  );
}

export default App;
