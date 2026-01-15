import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Signin from './SignIn';          
import Signup from './Signup';
import AddLink from './AddLink';
import LinkView from './LinkView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        
     
        <Route path="/signin" element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='add-link' element={< AddLink/>} />
        <Route path='link-view' element={<LinkView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
