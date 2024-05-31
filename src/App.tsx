
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
