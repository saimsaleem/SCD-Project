import AddTransport from './Components/AddTransport';
import TransportMenu from './Components/TransportMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayTransport from './Components/DisplayTransport';
import UpdateTransport from './Components/UpdateTransport';


function App() {
  return (
    <>
    <div  data-testid="AppTest" className='App'>
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<TransportMenu/>}/>
      <Route path="/AddTransport" element={<AddTransport/>}/>
      <Route path="/DisplayTransport" element = {<DisplayTransport/>}/>
      <Route path="/UpdateTransport" element = {<UpdateTransport/>}/>
    </Routes>

  </BrowserRouter>
    </div>
  </>
  );
}

export default App;
