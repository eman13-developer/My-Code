import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App'
import Hook from './hooks/hook'
import Usatcomponent from './hooks/usat/usat'
import Ustatetask from './hooks/ustatetask/ustatetask'
import Testing from './testing/testing'
import { Navbar } from './testing/testing'
import { Herosection } from './testing/testing'
import Useeffect from './hooks/useEffect';
import Apifetching from './Api-fetching/api';
import Taskapi from './Api-fetching/taskapi';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Hook/> */}
    {/* <Usatcomponent/> */}
    {/* <Ustatetask/> */}
    {/* <Navbar/>
    <Herosection/>
    <Testing/> */}
    {/* <Useeffect/> */}
    {/* <Apifetching/> */}
    <Taskapi/>
  </StrictMode>,
)
