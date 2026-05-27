import { Outlet } from 'react-router-dom';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand">
      <Outlet />
      <Footer />
    </div>
  );
}
