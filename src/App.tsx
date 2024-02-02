import './App.css';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
          <Navbar />
          <Outlet/>
          <Footer />
    </>
  );
}
export default App;