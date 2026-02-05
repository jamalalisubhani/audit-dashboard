import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Details } from './pages/Details';
import { Tracking } from './pages/Tracking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="tracking" element={<Tracking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
