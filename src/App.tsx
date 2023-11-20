import './App.css';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';


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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
