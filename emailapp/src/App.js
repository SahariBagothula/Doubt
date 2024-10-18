import {Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Inbox from './components/Inbox';
import Trash from './components/Trash';
import Spam from './components/Spam';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/trash' element={<Trash />} />
        <Route path='/spam' element={<Spam />} />
      </Routes>
    </div>
  );
}

export default App;
