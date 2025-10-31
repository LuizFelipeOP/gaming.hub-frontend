import { createBrowserRouter } from 'react-router-dom';
import  HomePage  from './Pages/HomePage/HomePage';
import  ChessGameComponent  from './Pages/Chess/chess-game.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/chess',
    element: <ChessGameComponent />,
  }
]);



export default router;