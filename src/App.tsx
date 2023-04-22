import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './container/Layout/Layout';
import { ShowShanel } from './components/ShowShanel/ShowShanel';
import './App.css';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/tv-maze' element={<Layout />}>
            <Route path='/tv-maze/shows/:id' element={<ShowShanel />}/>
            <Route path='/tv-maze/*' element={<NotFoundPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
