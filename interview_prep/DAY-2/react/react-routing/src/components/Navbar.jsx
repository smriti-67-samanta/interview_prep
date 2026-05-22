import {Link} from "react-router-dom";

function Navbar(){
    return(
      <nav style={{
        position:"fixed",
        left:"0",
        right:"0", 
        top:"0",
        display:"flex",
        alignItems:"center",
        width:"100%",
        padding:"20px"

      }}>
      <Link to='/' style={{marginRight:"100px",marginLeft:"100px"}}>Home</Link>
      <Link to='/About' style={{marginRight:"100px"}}>About</Link>
      <Link to='/Course' style={{marginRight:"100px"}}>Course</Link>
      <Link to='/CourseDetails'>Course Details</Link>
      </nav>
    )
}

export default Navbar;