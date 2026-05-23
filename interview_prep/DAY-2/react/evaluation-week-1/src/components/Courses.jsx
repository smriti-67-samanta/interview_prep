import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Courses(){
    const navigate=useNavigate()

    const[search,setSearch]=useState(" ")
    const courses=[
        {id:1,title:"basic",category:"frontend",duration:"6 weeks",price:"$50"},
    {id:2,title:"basic",category:"backend",duration:"4 weeks",price:"$70"},
{id:3,title:"advance",category:"backend",duration:"5 weeks",price:"$50"},
{id:4,title:"advance",category:"react",duration:"8 weeks",price:"$40"},
{id:5,title:"advance",category:"frontend",duration:"6 weeks",price:"$80"}]
    
   const filtered=courses.filter(courses=>courses.title.toLowerCase().includes(search.toLowerCase()))
  
    return(
        <>
        <div>
        <h2 style={{marginTop:"100px"}}>COURSES </h2>

        <input type="text"
               placeholder="type here..."
               value={search}
               onChange={(e)=>setSearch(e.target.value)}/>

         {filtered.map(course=>(
            <div key={course.id}>
                <h3>{course.title}</h3>
                <p>Category{course.category}</p>
                <p>Duration{course.duration}</p>
                <p>Price:{course.price}</p>

            </div>
         ))}
        
    </div>

    <button onClick={()=> navigate('/SavedCourses')} style={{color:"red", marginTop:"100px"}}>View Saved courses</button>
        </>
    )
}
export default Courses;