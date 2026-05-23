import { useNavigate } from "react-router-dom";

function PageNotFound(){
    const navigate=useNavigate()
    return(
        <>
        <h3 style={{marginTop:"200px",marginBottom:"100px"}}>page not found</h3>
        <button onClick={()=> navigate('/')}>back to home</button>
        </>
    )
}
export default PageNotFound;