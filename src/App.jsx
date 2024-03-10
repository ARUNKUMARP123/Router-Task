
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Navbar } from './component/Navbar'
//import { Billboard } from './component/Billboard/Billboard'
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { Blogs } from "./Pages/Blogs/Blogs.jsx";
import { BlogDetails } from "./Pages/BlogDetails/BlogDetails.jsx";
function App() {
  

  return (
    <main>
<Navbar/>
<div className="my-1"></div>
<Routes>
  <Route path="/login" Component={Login}/>
  <Route path="/signup" Component={Signup}/>
  <Route path="/:category" Component={Blogs}/>
  <Route path="/blog/:id" Component={BlogDetails}/>
</Routes>

    </main>
   
   
  )
}

export default App
