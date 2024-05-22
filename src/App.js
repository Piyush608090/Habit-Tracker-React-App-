
import './App.css';
import { Home } from './components/Home';
import { HomeWeek } from './components/HomeWeek';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
function App() {
const router = createBrowserRouter([
  {path:"/" ,element:<Home/>},
  {path:"/week-view",element:<HomeWeek/>},
  ])

  return (
    <div className="App">
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </div>
  );
}
export default App;
