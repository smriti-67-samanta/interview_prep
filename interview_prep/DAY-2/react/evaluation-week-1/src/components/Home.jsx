import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate()
    return(
        <>
        <h2 style={{marginTop:"50px"}}>Welcome User</h2>
        <p style={{marginTop:"50px", marginBottom:"50px",color:"blue"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione corrupti consequatur dignissimos officia ipsum, ducimus aperiam alias atque quis, id, consectetur earum! Natus mollitia at eligendi quaerat vel fugit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique molestias impedit illo laudantium ea delectus earum ex accusamus, quaerat dignissimos veniam debitis, est obcaecati rerum itaque quis maxime, magnam esse.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione corrupti consequatur dignissimos officia ipsum, ducimus aperiam alias atque quis, id, consectetur earum! Natus mollitia at eligendi quaerat vel fugit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique mol
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione corrupti consequatur dignissimos officia ipsum, ducimus aperiam alias atque quis, id, consectetur earum! Natus mollitia at eligendi quaerat vel fugit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique mol
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione corrupti consequatur dignissimos officia ipsum, ducimus aperiam alias atque quis, id, consectetur earum! Natus mollitia at eligendi quaerat vel fugit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique mol
        </p>
        
        <button onClick={()=> navigate('/Courses')} style={{color:"red"}}>Go to Courses</button>
        </>
    )
}
export default Home;