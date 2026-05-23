import {Link} from "react-router-dom"

function Navbar(){


return(
    <nav>
    <Link to='/' style={{marginRight:"100px",marginLeft:"100px"}}>Home</Link>
    <Link to='/About' style={{marginRight:"100px"}}>About</Link>
    <Link to='/Courses' style={{marginRight:"100px"}}>Courses</Link>
    <Link to='/SavedCourses'>Saved Courses</Link>
    </nav>
)
}
export default Navbar;