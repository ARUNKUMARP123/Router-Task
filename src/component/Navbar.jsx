
import { NavLink,useNavigate } from "react-router-dom"
export const Navbar = () => {


  const Navigator =useNavigate();


  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
    <div className="container-fluid">
     <div className="row " style={{width:'100%'}}>
        <div className="col-4">
        <a className="navbar-brand" href="#">
        {/* <img src="./src/image/pngwing.png" alt="Avatar Logo" style={{width:"40px"}} className="rounded-pill bg-light"/> */}
        <span className="navbar-brand mx-3">Spider-Man</span>
      </a>
        </div>
        <div className="col-8">
        <div className="row ">
            <div className="col-8">
            <ul className="nav ">
  <li className="nav-item">
   <NavLink to="/all"   className={({ isActive, isPending }) =>
    isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link" } href="#">All Courses</NavLink>
  </li>
  <li className="nav-item">
   <NavLink to="/fsd"  className={({ isActive, isPending }) =>
    isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link" } href="#">Full Stack</NavLink>
  </li>
  <li className="nav-item">
   <NavLink to="/db"   className={({ isActive, isPending }) =>
    isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link" } href="#">Database</NavLink>
  </li>
  <li className="nav-item">
   <NavLink to="/be"  className={({ isActive, isPending }) =>
    isPending ? "nav-link" : isActive ? "nav-link active" : "nav-link" } href="#">Backend Technologies</NavLink>
  </li> 
</ul>
            </div>
            <div className="col-4 d-flex justify-content-end ">
            <button type="button" className="btn btn-outline-light mx-2" onClick={()=>Navigator('/login')} >Login</button>
            <button type="button" className="btn btn-light" onClick={()=>Navigator('/signup')}>Signup</button>
            </div>
        </div>
        </div>
     </div>
    </div>
  </nav>
   
  )
}