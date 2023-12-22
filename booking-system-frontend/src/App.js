import { Routes, Route } from 'react-router-dom';

import PrimaryRoute from './routing/PrimaryRoute';
import AllToursPage from './pages/AllToursPage/AllToursPage';
import HomePage from './pages/HomePage/HomePage';
import MyToursPage from './pages/MyToursPage/MyToursPage';
import TourDetails from './components/TourDetails/TourDetails';
import TourForm from './components/TourForm/TourForm';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<PrimaryRoute />}>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/tours' element={<AllToursPage />} />
        <Route exact path="/tours/:id" element={<TourDetails />} />
        <Route exact path="/add-tour" element={<TourForm />} />
        <Route exact path="/bookings/new" element={<TourForm />} />
        <Route exact path="/bookings/:id" element={<TourForm />} />
        <Route exact path="/my-tours" element={<MyToursPage />} />
      </Route>
    </Routes>
  );
}

export default App;
