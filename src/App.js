import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/windbnb" element={<Main />} />
        <Route path='/windbnb/:title' element={<DetailsPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
