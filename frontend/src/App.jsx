import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"

const App = () => {
  return (
    <div data-theme="autumn">
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element= <Home/>
        />
      </Routes>
    </BrowserRouter>
    
   
    <Footer/>
    </div>
    
  )
}

export default App