import Nav from "../components/Navbar";
import Ds from '../assets/Dss.jpeg'
import '../styles/home.css'

function Home() {
    return (
        <>
           <Nav />
           <div className="container mx-5 my-2">
               <p className="fw-bolder">Recomended Movies</p>
               <div className="row">
                   <div className="col d-flex h-100">
                       <div className="card rounded-pill" style={{height: 20 + "rem", width: 15 + "rem"}}>
                           <img src={Ds} class="card-img-top" alt="..."/>
                           <div className="bg-dark text-white py-2 top">
                           <i class="bi bi-hand-thumbs-up-fill p-2 text-success">58k </i>
                           </div>
                       </div>
                   </div>
                   <div className="col d-flex h-100">
                       <div className="card rounded-pill" style={{height: 20 + "rem", width: 15 + "rem"}}>
                           <img src={Ds} class="card-img-top" alt="..."/>
                           <div className="bg-dark text-white py-2 top">
                           <i class="bi bi-hand-thumbs-up-fill p-2 text-success">58k </i>
                           </div>
                       </div>
                   </div>
                   <div className="col d-flex h-100">
                       <div className="card rounded-pill" style={{height: 20 + "rem", width: 15 + "rem"}}>
                           <img src={Ds} class="card-img-top" alt="..."/>
                           <div className="bg-dark text-white py-2 top">
                           <i class="bi bi-hand-thumbs-up-fill p-2 text-success">58k </i>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Home;