import { Routes, Route } from 'react-router-dom'
import About from './pages/About/'
import Record from './pages/Record/'

const Router = (props) => {

  return (
    <Routes>
      <Route path='/' element={<Record />} /> 
      <Route path='/about' element={<About />} /> 
    </Routes>
  );
};

export default Router
