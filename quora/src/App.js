import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Follower from './components/Follower';
import Quora from './components/Quora';
import Answer from './components/Answer';
import Public from './components/Public';
import Notification from './components/Notification';
function App() {
  return (
   <div className='Quora-container'>
      {/*<h1>hello my sweetheart</h1>*/}
          <BrowserRouter>
      
          <Routes>
          <Route path ="follower" element={<Follower/>}/>
          <Route path ="/" element={<Quora/>}/>
          <Route path ="Answer" element={<Answer/>}/>
          <Route path ="public" element={<Public/>}/>
          <Route path ="Notification" element={<Notification/>}/>
          </Routes>
        
        </BrowserRouter>
        
      </div>
  );
}

export default App;
