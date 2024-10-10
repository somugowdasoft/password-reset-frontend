import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//components
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import RegisterForm from './components/RegisterForm';
//css
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
