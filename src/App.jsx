import './styles/App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Auth from './components/Auth';
import Topics from './components/Topics';
import QuizWindow from './components/QuizWindow';

//react routes
const router = createBrowserRouter([
  {
    path:'/',
    element: <Auth/>
  },
  { 
    path:'/topics',
    element: <Topics/>
  },
  {
    path:'/quiz',
    element: <QuizWindow/>
  }
])

function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
