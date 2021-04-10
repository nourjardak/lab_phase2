import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import BookCarousel from './Components/BookCarousel';
import About from './Components/About';
import AllBooks from './Components/AllBooks';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <BookCarousel/>
      <About/>
      <AllBooks/>
    </div>
  );
}

export default App;
